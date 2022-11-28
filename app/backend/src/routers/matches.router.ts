import { Router } from 'express';
import MatchesController from '../controllers/Matches.controller';

const matchesController = new MatchesController();

const routers = Router();

routers.get('/', matchesController.getMatches);

export default routers;
