import { Router } from 'express';
import LeaderBoardController from '../controllers/Leaderboard.controller';

const routers = Router();

const leaderBoardController = new LeaderBoardController();

routers.get('/home', leaderBoardController.filterHomeRankings);

export default routers;
