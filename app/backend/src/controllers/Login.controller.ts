import { Request, Response } from 'express';

// import { generateToken } from '../util/JWT';
import LoginService from '../services/Login.service';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  verifyLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    // const { message } = await this.loginService.verifyLogin(req.body);
    const { type, message } = await this.loginService.verifyLogin(email, password);
    if (type) return res.status(type).json({ message });
    // const token = new generateToken(message);
    // return res.status(201).json({ hashPassword });
    return res.status(200).json({ token: message });
  };
}
