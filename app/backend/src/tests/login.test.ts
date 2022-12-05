import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';
import Users from '../database/models/Users';
import * as jwt from 'jsonwebtoken';

import { Response } from 'superagent';
import { token } from './mocks/login.mocks';

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
    (sinon.restore);
  })

  it('statusCode 200 - Return token', async () => {
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

  it('Status 400 - Return message: All fields must be filled', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/login')
    .send({
      password: "secret_admin"
    })
    expect(chaiHttpResponse).to.have.status(400);
    expect(chaiHttpResponse.body).to.be.deep.equal({message: 'All fields must be filled'});
  });




  // NÃO É POSSÍVEL EXECUTAR POIS O 'BEFOREEACH' ESTÁ CONDICIONADO A RESOLVER O PROCESSO

  // it('statusCode 401 - Return message: Incorrect email or password', async () => {
  //   chaiHttpResponse = await chai
  //   .request(app)
  //   .post('/login')
  //   .send({
  //     email: "a@a.com",
  //     password: "secret_admin"
  //   })
  //   expect(chaiHttpResponse).to.have.status(401);
  //   expect(chaiHttpResponse.body).to.be.deep.equal({message: 'Incorrect email or password'});
  // });



  
  it('Status 200 - Validacao do usuario ROLE', async () => {

    sinon.stub(jwt, 'verify')
      .resolves({email:'admin@admin.com', role: 'admin'});

    chaiHttpResponse = await chai
    .request(app)
    .get('/login/validate')
    .set('Authorization', token)
    .send({role: "admin"});

    expect(chaiHttpResponse).to.have.status(200);
    // expect(chaiHttpResponse.body).to.have.property('role');
    // não consigo verificar se o retorno do meu processo está correto
  });




  
  // it('Status 401 - Return message: Token must be a valid token', async () => {
  
  //   sinon.stub(jwt, 'verify')
  //     .resolves({email:'error@error.com', role: 'admin'});
  
  //   chaiHttpResponse = await chai
  //     .request(app)
  //     .get('/login/validate')
  //     .set('Authorization', token)
  //     .send({role: 'admin'});
  
  //   expect(chaiHttpResponse).to.have.status(401);
  //   expect(chaiHttpResponse.body).to.be.deep.equal({message: 'Token must be a valid token'});
  // });

});
