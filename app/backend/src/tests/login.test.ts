import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';
import Users from '../database/models/Users';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Testes relativos a Rota Login', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(Users, "findOne")
      .resolves({
          id: 1,
          username: 'Admin',
          role: 'admin',
          email: 'admin@admin.com',
          password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
      } as Users);
  });

  after(()=>{
    (Users.findOne as sinon.SinonStub).restore();
  })

describe('Rota Login > Verificacao da rota Login', () => {
  it('Acesso a retorno status code 200', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/login')
    .send({
      email: "admin@admin.com",
      password: "secret_admin"
    })
    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.have.property('token');
  });
})

describe('Rota Login > Get Role', () => {
  it('Retorno status code 200', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/login/validate')
    .send({
      email: "admin@admin.com",
      password: "secret_admin"
    })
    // expect(chaiHttpResponse).to.have.status(200);
    // expect(chaiHttpResponse.body).to.have.property('role');
  });
})

});
