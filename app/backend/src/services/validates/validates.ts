import TeamsService from '../Teams.service';
import HttpException from '../../util/HttpException';

export default class Validates {
  constructor(
    private teamService = new TeamsService(),
  ) {}

  validateTeam = async (homeTeam: number, awayTeam: number) => {
    const teamHome = await this.teamService.findById(homeTeam);
    const teamAway = await this.teamService.findById(awayTeam);

    if (!teamHome || !teamAway) throw new HttpException(404, 'There is no team with such id!');
  };
}
