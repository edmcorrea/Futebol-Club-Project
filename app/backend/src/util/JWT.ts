import * as jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';
import * as dotenv from 'dotenv';

import { IUser } from '../interfaces/interfaces';

dotenv.config();

const TOKEN_SECRET_KEY = process.env.JWT_SECRET || 'TFC_Project';

export default class JWT {
  generateToken = (user: IUser) => {
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
    const token = jwt.sign(
      user,
      TOKEN_SECRET_KEY,
      jwtConfig as object,
    );
    return token;
  };

  verifyToken = (token: string): JwtPayload => {
    // try {
    const decodedToken = jwt.verify(token, TOKEN_SECRET_KEY);
    return decodedToken as JwtPayload;
    // } catch (_error) {
    //   return { type: 'EXPIRED_INVALID', message: 'Invalid token' };
    // }
  };

  removePassword = (user: IUser) => {
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  };
}
