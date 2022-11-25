import { Router } from 'express';
import TeamsController from '../controllers/Teams.controller';

const routers = Router();

const teamsController = new TeamsController();

routers.get('/', teamsController.findAll);
export default routers;
