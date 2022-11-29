import { Request, Response } from 'express';
import LeaderBoardService from '../services/Leaderboard.service';

export default class LeaderBoardController {
  constructor(private leaderBoardService = new LeaderBoardService()) {}
  filterHomeRankings = async (req: Request, res: Response) => {
    const result = await this.leaderBoardService.statusHomeRankings();
    return res.status(200).json(result);
  };
}
