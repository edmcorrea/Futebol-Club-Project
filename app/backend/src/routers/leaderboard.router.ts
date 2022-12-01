import { Router } from 'express';
import LeaderBoardController from '../controllers/Leaderboard.controller';

const routers = Router();

const leaderBoardController = new LeaderBoardController();

routers.get('/', leaderBoardController.filterRankings);
routers.get('/home', leaderBoardController.filterHomeAndAwayRankings);
routers.get('/away', leaderBoardController.filterHomeAndAwayRankings);

export default routers;
