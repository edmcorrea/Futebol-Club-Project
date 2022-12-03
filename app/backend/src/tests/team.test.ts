import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';

import { Response } from 'superagent';
import Teams from '../database/models/Teams';
import { allTeamMock, teamMock } from './mocks/team.mock';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Testes de integracao referentes a rota Team', () => {
  let chaiHttpResponse: Response;

describe('a rota consegue buscar o elemento pelo :id inserido no end point da requisição', () => {
  before(async () => {
    sinon
      .stub(Teams, "findOne")
      .resolves({
        ...teamMock
      } as Teams);
  });

  after(()=>{
    (Teams.findOne as sinon.SinonStub).restore();
  })

  it('Test final', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .get('/teams/:id')
       

    expect(chaiHttpResponse).to.have.status(200);
  });
});

describe('a rota consegue buscar o elemento /team inserido no end point da requisição', () => {
  before(async () => {
    sinon
      .stub(Teams, "findAll")
      .resolves(allTeamMock as Teams[]);
  });

  after(()=>{
    (Teams.findAll as sinon.SinonStub).restore();
  })

  it('Test final', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .get('/teams')
       
    expect(chaiHttpResponse).to.have.status(200);
  });
})
});
