export default class LoginController {
  private _name: string;
  constructor(name = 'login') {
    this._name = name;
  }

  verifyLogin() {
    return this._name;
  }
}
