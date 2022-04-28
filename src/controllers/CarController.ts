import { Response } from 'express';
import { Car } from '../interfaces/CarInterface';
import CarService from '../services/CarService';
import BaseController, { BodyRequest, ErrorResponse } from './index';

export default class CarController extends BaseController<Car> {
  private _route: string;

  constructor(service = new CarService(), route = '/cars') {
    super(service);
    this._route = route;
  }

  get route() {
    return this._route;
  }

  create = async (
    req: BodyRequest<Car>, 
    res: Response<Car | ErrorResponse>,
  ): Promise<typeof res> => {
    const { body } = req;
    try {
      const car = await this.service.create(body);
      if (!car) {
        return res.status(500).json({ 
          error: this.errors.INTERNAL_SERVER_ERROR,
        });
      }
      if ('error' in car) {
        return res.status(400).json(car.error.issues);
      }
      return res.status(201).json(car);
    } catch (error) {
      return res.status(500).json({ error: this.errors.INTERNAL_SERVER_ERROR });
    }
  };
}
