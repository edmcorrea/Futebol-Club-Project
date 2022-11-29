import { Router } from 'express';
import MatchMiddleware from '../middleware/MatchMidlleware';
import MatchesController from '../controllers/Matches.controller';
import UserMidlleware from '../middleware/UserMidlleware';

const matchMiddleware = new MatchMiddleware();
const userMidlleware = new UserMidlleware();

const matchesController = new MatchesController();

const routers = Router();

routers.get('/', matchesController.getMatches);
routers.post(
  '/',
  matchMiddleware.sameTeams,
  userMidlleware.validateToken,
  matchesController.insertMatch,
);
routers.patch('/:id/finish', matchesController.updateStatusMatch);
routers.patch('/:id', matchesController.updateScoreMatch);

export default routers;
