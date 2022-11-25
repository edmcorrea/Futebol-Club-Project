// import * as bcrypt from 'bcryptjs';

// export default class Bcrypt {
//   constructor(public password: string, public passHash: string) {

//   }

//   public compare = (password: string, passHash: string) => {
//     console.log(password, passHash);
//     console.log(bcrypt.compare);

//     bcrypt.compare(password, passHash, (err, data) => {
//       if (err) throw err;
//       if (data) return { type: null, message: `data:${data}` };
//       return { type: 400, message: 'Incorrect email or password' };
//     });
//   };
// }
