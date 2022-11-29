import { ILeaderBoard, IMatch } from '../interfaces/interfaces';
import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';

export default class LeaderBoardService {
  public arrayResult: ILeaderBoard[];
  // public newTeams: ILeaderBoard[];
  constructor() {
    this.arrayResult = [];
    // this.newTeams = ;
  }

  statusHomeRankings = async () => {
    const findAll = await Matches.findAll({ where: { inProgress: 'false' } }) as IMatch[];
    findAll
      .forEach(({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals }: IMatch) => {
        let findHome = this.arrayResult.find(({ timeId }) => timeId === homeTeam) as ILeaderBoard;
        if (!findHome) {
          findHome = { timeId: homeTeam, vit: 0, emp: 0, derr: 0, gols: 0, golsSofr: 0 };
          this.statusGame(findHome, homeTeamGoals, awayTeamGoals);
          this.arrayResult.push(findHome);
        } else {
          this.statusGame(findHome, homeTeamGoals, awayTeamGoals);
          const foundIxHome = this.arrayResult.findIndex(({ timeId }) => timeId === homeTeam);
          this.arrayResult[foundIxHome] = findHome;
        }
      });
    const statusResult = this.arrayResult;
    return statusResult;
  };

  statusGame = (team: ILeaderBoard, homeTeamGoals:number, awayTeamGoals: number ) => {
    if (homeTeamGoals > awayTeamGoals) team.vit += 1;
    else if (homeTeamGoals < awayTeamGoals) team.derr += 1;
    else team.emp += 1;
    return team;
  };
}
// { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals }
