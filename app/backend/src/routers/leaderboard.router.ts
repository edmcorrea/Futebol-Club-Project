import { Router } from 'express';
import LeaderBoardController from '../controllers/Leaderboard.controller';

const routers = Router();

const leaderBoardController = new LeaderBoardController();

routers.get('/home', leaderBoardController.filterHomeRankings);
routers.get('/away', leaderBoardController.filterAwayRankings);

export default routers;
