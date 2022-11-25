import * as bcrypt from 'bcryptjs';
import JWT from '../util/JWT';
// import Bcrypt from '../util/bcrypt';
import Users from '../database/models/Users';
// import ILogin from '../interfaces/ILogin';

export default class LoginService {
  verifyLogin = async (email: string, password: string) => {
    const user = await Users.findOne({ where: { email } });
    if (!user) return { type: 401, message: 'Incorrect email or password' };

    const validatePass = await bcrypt.compare(password, user.password);

    if (!validatePass) return { type: 401, message: 'Incorrect email or password' };

    const jwt = new JWT();
    const token = jwt.generateToken(user);

    return { type: null, message: token };
  };
  // $2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW
}
