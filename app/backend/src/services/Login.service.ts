import * as bcrypt from 'bcryptjs';
import JWT from '../util/JWT';
import Users from '../database/models/Users';
import HttpException from '../util/HttpException';

export default class LoginService {
  constructor(private jwt = new JWT()) {}
  verifyLogin = async (email: string, password: string) => {
    const user = await Users.findOne({ where: { email }, raw: true });
    if (!user) throw new HttpException(401, 'Incorrect email or password');

    const validatePass = await bcrypt.compare(password, user.password);

    if (!validatePass) throw new HttpException(401, 'Incorrect email or password');

    const userWithoutPassword = this.jwt.removePassword(user);

    const token = this.jwt.generateToken(userWithoutPassword);

    return token;
  };
}
