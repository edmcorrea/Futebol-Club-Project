interface ILogin {
  email: string;
  password?: string;
}

interface IUser {
  id: number;
  username: string;
  role: string;
  email: string;
  password?: string;
}

interface IMatch {
  homeTeam: number | any
  awayTeam: number | any;
  homeTeamGoals: number | any;
  awayTeamGoals: number | any;
}

interface IMatchKey {
  0: number;
  1: number;
  2: number;
  3: number;
}

interface IScoreMatch {
  homeTeamGoals: number;
  awayTeamGoals: number;
}

interface ITeam {
  id: number;
  teamName: string;
}

interface ILeaderBoard {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
}

interface ILeaderSuport {
  timeId?: number;
  vit: number;
  emp: number;
  derr: number;
  gols: number;
  golsSofr: number;
}

interface IMatchesComplete {
  timeId: number;
  vit: number;
  derr: number;
  emp: number;
  gols: number;
  golsSofr: number;
  homeTeam?: number;
  awayTeam?: number;
  homeTeamGoals?: number;
  awayTeamGoals?: number;
}

export { ILogin, IUser, IMatch,
  IScoreMatch, ILeaderBoard, ILeaderSuport,
  ITeam, IMatchKey, IMatchesComplete };
