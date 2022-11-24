// import * as bcrypt from 'bcryptjs';
import Users from '../database/models/Users';
import ILogin from '../interfaces/ILogin';

export default class LoginService {
  constructor(private name = 'xuxa') {}

  async verifyLogin({ email }: ILogin) {
    console.log('entrei verifyLogin');
    const user = await Users.findOne({ where: { email } });
    if (!user) return { type: 400, message: 'Incorrect email or password' };

    // bcrypt.compare(password, user.password, (err, data) => {
    //   if (err) throw err;
    //   if (data) return { type: null, message: `data:${data}` };
    //   return { type: 400, message: 'Incorrect email or password' };
    // });

    return { type: null, message: { name: this.name, user } };
  }
  // $2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW
}
