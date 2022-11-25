import * as jwt from 'jsonwebtoken';
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
      { user },
      TOKEN_SECRET_KEY,
      jwtConfig as object,
    );
    return token;
  };
}

// function generateToken(id: number | undefined) {
//   const jwtConfig = {
//     expiresIn: '7d',
//     algorithm: 'HS256',
//   };
//   const token = jwt.sign(
//     { id },
//     TOKEN_SECRET_KEY,
//     jwtConfig as object,
//   );
//   return token;
// }

// export {
//   generateToken,
// };
