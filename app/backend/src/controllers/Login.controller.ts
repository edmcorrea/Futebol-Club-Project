import { Request, Response } from 'express';

// import { generateToken } from '../util/JWT';
import LoginService from '../services/Login.service';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  verifyLogin = async (req: Request, res: Response) => {
    const login = req.body;
    // const { message } = await this.loginService.verifyLogin(req.body);
    const { type, message } = await this.loginService.verifyLogin(login);
    // const token = new generateToken(message);
    // return res.status(201).json({ hashPassword });
    return res.status(201).json({ type, message });
  };
}
