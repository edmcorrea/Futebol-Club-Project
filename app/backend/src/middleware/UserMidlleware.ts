import { NextFunction, Request, Response } from 'express';
import { schemaLogin } from './schemas';

// export default function validateLogin(req: Request, res: Response, next: NextFunction) {
//   const { error } = schemaLogin.validate(req.body);

//   if (error) {
//     return res.status(400).json({ message: 'All fields must be filled',
//     });
//   }
//   next();
// }

export default class UserMidlleware {
  // constructor(private req: Request, private res: Response, private next: NextFunction) {
  //   this.req = req;
  //   this.res = res;
  //   this.next = next;
  // }
  public validateLogin = (req: Request, res: Response, next: NextFunction) => {
    const { error } = schemaLogin.validate(req.body);
    if (error) {
      return res.status(400).json({ message: 'All fields must be filled',
      });
    }
    next();
  };
}
