import { ValidationError } from 'express-validator';
import { ResponseErrorItem } from '../types';
import { CustomError } from './custom-error';

export class RequestValidationError extends CustomError {
  statusCode: number = 400;
  constructor(public errors: ValidationError[]) {
    super('Invalid request parameters');

    //Only because we are extending from a built-in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeError(): ResponseErrorItem[] {
    return this.errors.map((error): ResponseErrorItem => {
      return { message: error.msg, field: error.param };
    });
  }
}
