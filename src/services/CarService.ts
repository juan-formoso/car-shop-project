import { Car, CarSchema } from '../interfaces/CarInterface';
import BaseService, { ServiceError } from './index';
import CarModel from '../models/CarModel';

export default class CarService extends BaseService<Car> {
  constructor(model = new CarModel()) {
    super(model);
  }

  create = async (item: Car): Promise<Car | ServiceError | null> => {
    const parsedItem = CarSchema.safeParse(item);
    if (!parsedItem.success) {
      return { error: parsedItem.error };
    }
    return this.model.create(item);
  };
}
