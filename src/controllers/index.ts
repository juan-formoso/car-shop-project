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
}
