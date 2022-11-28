import { Request, Response } from 'express';
import MatchesService from '../services/Matches.service';

export default class MatchesController {
  constructor(private matchesService = new MatchesService()) {}
  getMatches = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    console.log(typeof inProgress, inProgress);

    const getAll = await this.matchesService.getMatches();

    if (inProgress) {
      const bool = (inProgress === 'true');
      const filtered = getAll.filter((match) => match.inProgress === bool);
      return res.status(200).json(filtered);
    }
    return res.status(200).json(getAll);
  };

  insertMatch = async (req: Request, res: Response) => {
    const insert = await this.matchesService.insertMatch(req.body);

    const findById = await this.matchesService.findMatch(insert.id);
    return res.status(201).json(findById);
  };

  updateMatch = async (req: Request, res: Response) => {
    const { id } = req.params;

    await this.matchesService.updateMatch(id);

    // const findById = await this.matchesService.findMatch(insert.id);
    return res.status(200).json({ message: 'Finished' });
  };
}
