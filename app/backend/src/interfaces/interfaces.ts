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
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
}

interface IScoreMatch {
  homeTeamGoals: number;
  awayTeamGoals: number;
}

interface ILeaderBoard {
  timeId: number;
  vit: number;
  emp: number;
  derr: number;
  gols: number;
  golsSofr: number;
}

export { ILogin, IUser, IMatch, IScoreMatch, ILeaderBoard };
