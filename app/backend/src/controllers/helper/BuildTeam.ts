import { ILeaderBoard, ILeaderSuport } from '../../interfaces/interfaces';

export default class BuildTeam {
  public name: string;
  public totalPoints: number;
  public totalGames: number;
  public totalVictories: number;
  public totalDraws: number;
  public totalLosses: number;
  public goalsFavor: number;
  public goalsOwn: number;
  public goalsBalance: number;
  public efficiency: number;
  constructor(
    name: string,
    { vit, derr, emp, gols, golsSofr }: ILeaderSuport,
  ) {
    this.name = name;
    this.totalPoints = vit * 3 + emp;
    this.totalGames = vit + derr + emp;
    this.totalVictories = vit;
    this.totalDraws = emp;
    this.totalLosses = derr;
    this.goalsFavor = gols;
    this.goalsOwn = golsSofr;
    this.goalsBalance = gols - golsSofr;
    this.efficiency = Number(((this.totalPoints / (this.totalGames * 3)) * 100).toFixed(2));
  }

  static buildTeamSort = (buildTable: ILeaderBoard[]) => {
    const buildTableSort = buildTable.sort((b: ILeaderBoard, a: ILeaderBoard): number =>
      a.totalPoints - b.totalPoints
      || a.totalVictories - b.totalVictories
      || a.goalsBalance - b.goalsBalance
      || a.goalsFavor - b.goalsFavor
      || a.goalsOwn - b.goalsOwn);
    return buildTableSort;
  };
}
