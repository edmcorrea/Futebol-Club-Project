import { NextFunction, Request, Response } from 'express';
import HttpException from '../util/HttpException';
import JWT from '../util/JWT';
import { schemaLogin } from './schemas';

export default class UserMidlleware {
  constructor(public jwt = new JWT()) {}

  public validateLogin = (req: Request, res: Response, next: NextFunction) => {
    const { error } = schemaLogin.validate(req.body);

    if (error) throw new HttpException(400, 'All fields must be filled');

    next();
  };

  public validateToken = (req: Request, res: Response, next: NextFunction) => {
    // if (!authorization) throw new HttpException(401, 'Token must be a valid token');

    try {
      const { authorization } = req.headers;
      const decoded = this.jwt.verifyToken(authorization as string);
      req.body.role = decoded.role;
      next();
    } catch (_error) {
      // throw new HttpException(401, 'Token must be a valid token');
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
  };
}
