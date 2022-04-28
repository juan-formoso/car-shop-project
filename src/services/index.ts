import { ZodError } from 'zod';
import Model from '../models/index';

export interface ServiceError {
  error: ZodError;
}

export default abstract class BaseService<T> {
  constructor(protected model: Model<T>) {}

  public async create(item: T): Promise<T | null | ServiceError> {
    return this.model.create(item);
  }

  public async read(): Promise<T[]> {
    return this.model.read();
  }

  public async readOne(id: string): Promise<T | null | ServiceError> {
    return this.model.readOne(id);
  }

  public async update(id: string, item: T): Promise<T | null | ServiceError> {
    return this.model.update(id, item);
  }

  public async delete(id: string): Promise<T | null | ServiceError> {
    return this.model.delete(id);
  }
}
