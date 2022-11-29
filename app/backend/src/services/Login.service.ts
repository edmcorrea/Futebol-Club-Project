import * as bcrypt from 'bcryptjs';
import JWT from '../util/JWT';
import Users from '../database/models/Users';

export default class LoginService {
  verifyLogin = async (email: string, password: string) => {
    const user = await Users.findOne({ where: { email } });
    if (!user) return { type: 401, message: 'Incorrect email or password' };

    const validatePass = await bcrypt.compare(password, user.password);

    if (!validatePass) return { type: 401, message: 'Incorrect email or password' };

    const jwt = new JWT();
    const userWithoutPassword = jwt.removePassword(user.dataValues);

    const token = jwt.generateToken(userWithoutPassword);

    return { type: null, message: token };
  };

  // verifyUser = async (email: string) => {
  //   const user = await Users.findOne({ where: { email } });
  //   return user;
  // };
}
