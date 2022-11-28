import { Router } from 'express';
import MatchesController from '../controllers/Matches.controller';

const matchesController = new MatchesController();

const routers = Router();

routers.get('/', matchesController.getMatches);
routers.post('/', matchesController.insertMatch);
routers.put('/:id/finish', matchesController.updateMatch);

export default routers;
