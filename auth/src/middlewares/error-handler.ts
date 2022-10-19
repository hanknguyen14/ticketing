import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors';

export function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
    if ( error instanceof CustomError ) {
        return res.status(error.statusCode).send({ errors: error.serializeError() });
    }

    res.status(400).send({ errors: [{
        message: 'Something went wrong',
    }] });
}
