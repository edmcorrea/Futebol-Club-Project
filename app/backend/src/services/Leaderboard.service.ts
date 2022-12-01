import { IMatch, assombro, ILeaderSuport } from '../interfaces/interfaces';
import Matches from '../database/models/Matches';

export default class LeaderBoardService {
  // public newTeams: ILeaderBoard[];
  // constructor() {
  //   // this.newTeams = { timeId: 0, vit: 0, emp: 0, derr: 0, gols: 0, golsSofr: 0 };
  // }

  findAllNoProgress = async () => {
    const findAll = await Matches.findAll({ where: { inProgress: 'false' } }) as IMatch[];
    return findAll;
  };

  statusHomeRanking = async (allMatch: IMatch[]) => {
    const arrayResult: ILeaderSuport[] = [];

    allMatch.forEach(({ homeTeam, homeTeamGoals, awayTeamGoals }: IMatch) => {
      let findHome = arrayResult.find(({ timeId }) => timeId === homeTeam);
      if (!findHome) {
        findHome = { timeId: homeTeam, vit: 0, derr: 0, emp: 0, gols: 0, golsSofr: 0 };
        arrayResult.push(findHome);
      }
      if (findHome) {
        if (homeTeamGoals > awayTeamGoals) { findHome.vit += 1; }
        if (homeTeamGoals < awayTeamGoals) { findHome.derr += 1; }
        if (homeTeamGoals === awayTeamGoals) { findHome.emp += 1; }
        findHome.gols += homeTeamGoals; findHome.golsSofr += awayTeamGoals;
      }
      const foundIxAway = arrayResult.findIndex(({ timeId }) => timeId === homeTeam);
      arrayResult[foundIxAway] = findHome as ILeaderSuport;
    });

    return arrayResult;
  };

  statusAwayRanking = async (allMatch: IMatch[]) => {
    const arrayResult: ILeaderSuport[] = [];

    allMatch.forEach(({ awayTeam, homeTeamGoals, awayTeamGoals }: IMatch) => {
      let findAway = arrayResult.find(({ timeId }) => timeId === awayTeam);
      if (!findAway) {
        findAway = { timeId: awayTeam, vit: 0, derr: 0, emp: 0, gols: 0, golsSofr: 0 };
        arrayResult.push(findAway);
      }
      if (findAway) {
        if (homeTeamGoals < awayTeamGoals) { findAway.vit += 1; }
        if (homeTeamGoals > awayTeamGoals) { findAway.derr += 1; }
        if (homeTeamGoals === awayTeamGoals) { findAway.emp += 1; }
        findAway.gols += homeTeamGoals; findAway.golsSofr += awayTeamGoals;
      }
      const foundIxAway = arrayResult.findIndex(({ timeId }) => timeId === awayTeam);
      arrayResult[foundIxAway] = findAway as ILeaderSuport;
    });
    return arrayResult;
  };
}
