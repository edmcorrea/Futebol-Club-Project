import TeamsService from '../services/Teams.service';

export default class Validates {
  constructor(private teamService = new TeamsService()) {}

  validateTeam = async (homeTeam: number, awayTeam: number) => {
    const teamHome = await this.teamService.findById(homeTeam);
    const teamAway = await this.teamService.findById(awayTeam);

    if (!teamHome || !teamAway) return { type: 404, message: 'There is no team with such id!' };

    return { type: null, message: null };
  };
}
