import { Request, Response } from 'express';
import MatchesService from '../services/Matches.service';

export default class MatchesController {
  constructor(private matchesService = new MatchesService()) {}
  getMatches = async (req: Request, res: Response) => {
    const getAll = await this.matchesService.getMatches();
    return res.status(200).json(getAll);
  };
}
