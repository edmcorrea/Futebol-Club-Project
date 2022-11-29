import { Request, Response } from 'express';
import Validates from '../util/validates';
import MatchesService from '../services/Matches.service';

export default class MatchesController {
  constructor(
    private matchesService = new MatchesService(),
    private validates = new Validates(),
  ) {}

  getMatches = async (req: Request, res: Response) => {
    const { inProgress } = req.query;

    const getAll = await this.matchesService.getMatches();

    if (inProgress) {
      const bool = (inProgress === 'true');
      const filtered = getAll.filter((match) => match.inProgress === bool);
      return res.status(200).json(filtered);
    }

    return res.status(200).json(getAll);
  };

  insertMatch = async (req: Request, res: Response) => {
    const { homeTeam, awayTeam } = req.body;
    // const { authorization } = req.headers;

    // console.log(authorization);
    // const validateDecoded = await this.validates.validateToken(authorization as string);
    // console.log(validateDecoded);
    // if (!validateDecoded) return res.status(401).json({ message: 'Token must be a valid token' });

    const validateTeams = await this.validates.validateTeam(homeTeam, awayTeam);
    if (validateTeams.type) {
      return res.status(validateTeams.type).json({ message: validateTeams.message });
    }

    const insert = await this.matchesService.insertMatch(req.body);

    const findById = await this.matchesService.findMatch(insert.id);
    return res.status(201).json(findById);
  };

  updateStatusMatch = async (req: Request, res: Response) => {
    const { id } = req.params;

    await this.matchesService.updateStatusMatch(id);

    return res.status(200).json({ message: 'Finished' });
  };

  updateScoreMatch = async (req: Request, res: Response) => {
    const { id } = req.params;

    await this.matchesService.updateScoreMatch(id, req.body);
    return res.status(200).json({ message: 'Score Updated' });
  };
}
