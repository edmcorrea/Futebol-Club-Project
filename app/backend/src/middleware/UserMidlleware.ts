import { NextFunction, Request, Response } from 'express';
import JWT from '../util/JWT';
import { schemaLogin } from './schemas';

export default class UserMidlleware {
  constructor(public jwt = new JWT()) {}

  public validateLogin = (req: Request, res: Response, next: NextFunction) => {
    const { error } = schemaLogin.validate(req.body);
    if (error) {
      return res.status(400).json({ message: 'All fields must be filled',
      });
    }
    next();
  };

  public validateToken = (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ message: 'authorization don\'t exist' });

    try {
      const decoded = this.jwt.verifyToken(authorization);
      req.body.role = decoded.message.role;
      next();
    } catch (_error) {
      return res.status(401).json({ message: 'token CRASH' });
    }
  };
}
