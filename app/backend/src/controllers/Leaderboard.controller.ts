import { Request, Response } from 'express';

export default class LeaderBoardController {
  filterHomeRankings = (req: Request, res: Response) => {
    console.log(req.body);
    return res.status(200).json('oi');
  };
}
