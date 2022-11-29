import { Router } from 'express';
import MatchMiddleware from '../middleware/MatchMidlleware';
import MatchesController from '../controllers/Matches.controller';

const matchMiddleware = new MatchMiddleware();

const matchesController = new MatchesController();

const routers = Router();

routers.get('/', matchesController.getMatches);
routers.post('/', matchMiddleware.sameTeams, matchesController.insertMatch);
routers.patch('/:id/finish', matchesController.updateStatusMatch);
routers.patch('/:id', matchesController.updateScoreMatch);

export default routers;
