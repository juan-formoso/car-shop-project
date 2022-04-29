import { Request, Response } from 'express';
import { ZodIssue } from 'zod';
import BaseService from '../services/index';

export type ErrorResponse =
  | {
    error: unknown;
  }
  | ZodIssue[];

export interface BodyRequest<T> extends Request {
  body: T;
}

enum ControllerError {
  BAD_REQUEST = 'Bad request',
  NOT_FOUND = 'Object not found',
  INTERNAL_SERVER_ERROR = 'Internal server error',
  REQUIRED_ID = 'Required id',
}

export default abstract class BaseController<T> {
  protected errors = ControllerError;

  abstract route: string;

  constructor(protected service: BaseService<T>) {}

  abstract create(
    req: BodyRequest<T>,
    res: Response<T | ErrorResponse>
  ): Promise<typeof res>;

  read = async (
    _req: Request, 
    res: Response<T[] | ErrorResponse>,
  ): Promise<typeof res> => {
    try {
      const items = await this.service.read();
      return res.status(200).json(items);
    } catch (error) {
      return res.status(500).json({ error: this.errors.INTERNAL_SERVER_ERROR });
    }
  };
}
