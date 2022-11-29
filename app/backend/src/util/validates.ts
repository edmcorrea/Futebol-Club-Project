import LoginService from '../services/Login.service';
import TeamsService from '../services/Teams.service';
import JWT from './JWT';

export default class Validates {
  constructor(
    private teamService = new TeamsService(),
    private jwt = new JWT(),
    private loginService = new LoginService(),
  ) {}

  validateTeam = async (homeTeam: number, awayTeam: number) => {
    const teamHome = await this.teamService.findById(homeTeam);
    const teamAway = await this.teamService.findById(awayTeam);

    if (!teamHome || !teamAway) return { type: 404, message: 'There is no team with such id!' };

    return { type: null, message: null };
  };

  // validateToken = async (token: string) => {
  //   const { email } = this.jwt.verifyToken(token);
  //   const findById = await this.loginService.verifyUser(email);
  //   return findById;
  // };
}
