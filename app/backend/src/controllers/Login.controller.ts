import { Request, Response } from 'express';
import JWT from '../util/JWT';

import LoginService from '../services/Login.service';
import HttpException from '../util/HttpException';

export default class LoginController {
  constructor(private loginService = new LoginService(), public jwt = new JWT()) {}

  verifyLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const token = await this.loginService.verifyLogin(email, password);

    return res.status(200).json({ token });
  };

  getRole = (req: Request, res: Response) => {
    try {
      const { role } = req.body; // Informação armazenada no middleware 'UserMiddleware', linha 24;
      return res.status(200).json({ role });
    } catch (_error) {
      throw new HttpException(500, 'Erro interno');
    }
  };
}
