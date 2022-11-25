import { Request, Response } from 'express';
import TeamsService from '../services/Teams.service';

export default class TeamsController {
  constructor(private teamsService = new TeamsService()) {}
  findAll = async (req: Request, res: Response) => {
    console.log('oi');
    const teamsAll = await this.teamsService.findAll();

    return res.status(200).json(teamsAll);
  };
}
