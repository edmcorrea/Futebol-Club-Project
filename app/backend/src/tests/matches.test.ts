import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';
import Matches from '../database/models/Matches';

import { Response } from 'superagent';
// import { allMatches } from './mocks/matches.mock';
import { IMatchesComplete } from '../interfaces/interfaces';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Testes de integracao referentes as rotas Matches', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(Matches, "findAll")
      .resolves();
  });

  after(()=>{
    (Matches.findAll as sinon.SinonStub).restore();
  })

  it('...', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .get('/matches')

       expect(chaiHttpResponse).to.have.status(200);
  });
});
