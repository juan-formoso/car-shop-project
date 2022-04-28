import { Request, Response } from 'express';
import { Car } from '../interfaces/CarInterface';
import { ServiceError } from '../services';
import CarService from '../services/CarService';
import BaseController from './index';

export default class CarController extends BaseController<Car> {
  private _route: string;

  constructor(service = new CarService(), route = '/cars') {
    super(service);
    this._route = route;
  }

  get route() {
    return this._route;
  }

  create = async (req: Request, res: Response): Promise<typeof res> => {
    const { body } = req;
    try {
      const car = await this.service.create(body);
      // o if abaixo foi utilizado baseado no repositório de "Adilson Gabriel" > https://github.com/adilsongb
      if ((car as ServiceError).error) {
        return res.status(400).json({ error: (car as ServiceError).error });
      }
      return res.status(201).json(car);
    } catch (error) {
      return res.status(500).json({ error: this.errors.INTERNAL_SERVER_ERROR });
    }
  };
}
