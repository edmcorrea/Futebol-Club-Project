import { Request, Response } from 'express';
import TeamsService from '../services/Teams.service';

export default class TeamsController {
  constructor(private teamsService = new TeamsService()) {}
  findAll = async (req: Request, res: Response) => {
    const teamsAll = await this.teamsService.findAll();
    return res.status(200).json(teamsAll);
  };

  findById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const teamById = await this.teamsService.findById(id);

    return res.status(200).json(teamById);
  };
}
