import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';
import Matches from '../database/models/Matches';

import { Response } from 'superagent';
import { allMatchesMock, createMatchMock, token } from './mocks/matches.mock';
import { IMatchesComplete } from '../interfaces/interfaces';
import * as jwt from 'jsonwebtoken';
import Users from '../database/models/Users';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Rotas Matches - Testes de integracao', () => {
  let chaiHttpResponse: Response;

  describe('Buscando informacoes no db', () => {
    before(async () => {
      sinon
        .stub(Matches, "findAll")
        .resolves(allMatchesMock as [[IMatchesComplete], any]);
    });
    
    after(()=>{
      (Matches.findAll as sinon.SinonStub).restore();
    })
      
    it('Status 200 - Roteirizando o findAll - Sucesso', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/matches')
      
      expect(chaiHttpResponse).to.have.status(200);
    });
  
    it('Status 200 - Roteirizando o findAll/inProgress - Sucesso', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/matches?inProgress=true')
      
      expect(chaiHttpResponse).to.have.status(200);
    });
  });


  // describe('Create partidas', () => {
  //   before(async () => {
  //     // sinon.stub(Matches, "create").resolves([{affectedRows: 1}] as unknown as Matches);
  //     // sinon.stub(jwt, 'verify').resolves({email:'admin@admin.com', role: 'admin'});
  //     // sinon.stub(Users, "findOne")
  //     //   .resolves({
  //     //       id: 1,
  //     //       username: 'Admin',
  //     //       role: 'admin',
  //     //       email: 'admin@admin.com',
  //     //       password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
  //     //   } as Users
  //     // );
  //     chaiHttpResponse = await chai.request(app).post('/login')
  //       .send({
  //         email: "admin@admin.com",
  //         password: "secret_admin"
  //       }
  //     )
  //   });
    
  //   // after(()=>{
  //   //   (Matches.restore);
  //   //   })
      
  //   it('Roteirizando o create - Sucesso', async () => {
  //     chaiHttpResponse = await chai
  //     .request(app)
  //     .post('/matches')
  //     .set('authorization', chaiHttpResponse.body.token)
  //     .send({
  //       "homeTeam": 12,
  //       "awayTeam": 2,
  //       "homeTeamGoals": 2,
  //       "awayTeamGoals": 2,
  //     });
      
  //     expect(chaiHttpResponse).to.have.status(201);
  //     // expect(chaiHttpResponse.body).to.be.deep.equal(createMatchMock);
  //   });
  
    // it('Roteirizando o findAll/inProgress - Sucesso', async () => {
    //   chaiHttpResponse = await chai
    //   .request(app)
    //   .get('/matches?inProgress=true')
      
    //   expect(chaiHttpResponse).to.have.status(200);
    // });
  // });

  describe('verifica a rota POST /matches', () => {
    let validateResponse: Response;
    before(async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
       email: 'user@user.com',
       password: 'secret_user',
     });

     validateResponse = await chai
     .request(app)
     .post('/matches')
     .set('authorization', chaiHttpResponse.body.token)
     .send({
      homeTeam: 16,
      awayTeam: 8,
      homeTeamGoals: 2,
      awayTeamGoals: 2,
    });
    });

    it('retorna o status code 201', async () => {
      expect(validateResponse).to.have.status(201);
    });
  })
});
