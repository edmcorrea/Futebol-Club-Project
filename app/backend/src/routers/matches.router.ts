import { Router } from 'express';
import MatchMiddleware from '../middleware/MatchMidlleware';
import MatchesController from '../controllers/Matches.controller';

const matchMiddleware = new MatchMiddleware();

const matchesController = new MatchesController();

const routers = Router();

routers.post('/', matchMiddleware.sameTeams, matchesController.insertMatch);
routers.get('/', matchesController.getMatches);
routers.patch('/:id/finish', matchesController.updateStatusMatch);
routers.patch('/:id', matchesController.updateScoreMatch);

export default routers;
