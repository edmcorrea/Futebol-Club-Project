import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';

import { Response } from 'superagent';
import Matches from '../database/models/Matches';
import { mockMatches, mockTeams } from './mocks/leaderboard.mock';
import Teams from '../database/models/Teams';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Rotas Leaderboard - testes de integração', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(Matches, "findAll")
      .resolves(mockMatches as any);
    sinon
      .stub(Teams, "findAll")
      .resolves(mockTeams as any);
  });

  after(()=>{
    (Matches.findAll as sinon.SinonStub).restore();
  })

  it('/home - sucess', async () => {

    chaiHttpResponse = await chai
    .request(app)
    .get('/leaderboard/home')
    
    expect(chaiHttpResponse).to.have.status(200);
  })

  it('/away - sucess', async () => {

    chaiHttpResponse = await chai
    .request(app)
    .get('/leaderboard/away')

    expect(chaiHttpResponse).to.have.status(200);
  })

  it('/ - sucess', async () => {

    chaiHttpResponse = await chai
    .request(app)
    .get('/leaderboard')
    .send()
      

      expect(chaiHttpResponse).to.have.status(200);
  })
});
