import { Schema, model as mongooseModel, Document } from 'mongoose';
import { Car } from '../interfaces/CarInterface';
import BaseModel from './index';

interface CarDocument extends Car, Document {}

const CarSchema = new Schema<CarDocument>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
});

export default class CarModel extends BaseModel<Car> {
  constructor(model = mongooseModel('Cars', CarSchema)) {
    super(model);
  }
}
