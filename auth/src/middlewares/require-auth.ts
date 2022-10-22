import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from '../errors';

export function requireAuth(req: Request, _res: Response, next: NextFunction) {
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }

  next();
}
