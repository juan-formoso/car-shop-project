import { Model, Document } from 'mongoose';
import { Model as IModel } from '../interfaces/ModelInterface';

export default abstract class BaseModel<T> implements IModel<T> {
  constructor(protected model: Model<T & Document>) {}

  create = async (item: T): Promise<T> => this.model.create({ ...item });

  read = async (): Promise<T[]> => this.model.find();

  readOne = async (id: string): Promise<T | null> => this.model.findOne({ 
    _id: id,
  });

  update = async (id: string, item: T): Promise<T | null> =>
    this.model.findOneAndUpdate({ _id: id }, { ...item });

  delete = async (id: string): Promise<T | null> =>
    this.model.findOneAndDelete({ _id: id });
}
