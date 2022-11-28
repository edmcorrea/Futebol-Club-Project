import { Request, Response } from 'express';
import MatchesService from '../services/Matches.service';

export default class MatchesController {
  constructor(private matchesService = new MatchesService()) {}
  getMatches = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    console.log(inProgress);

    const getAll = await this.matchesService.getMatches();
    if (inProgress) {
      const filtered = getAll.filter((match) => match.inProgress === Boolean(inProgress));
      return res.status(200).json(filtered);
    }
    return res.status(200).json(getAll);
  };

  // filterInProgress = async (req: Request, res: Response) => {
  //   const { q } = req.query;

  //   return res.status(200).json(q);
  // };
}
