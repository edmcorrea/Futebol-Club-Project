import { Request, Response } from 'express';
import TeamsService from '../services/Teams.service';
import LeaderBoardService from '../services/Leaderboard.service';
import BuildTeam from './helper/BuildTeam';
import { ILeaderBoard, ILeaderSuport, ITeam } from '../interfaces/interfaces';
import BuildTeamSort from './helper/BuildTeamSort';

export default class LeaderBoardController {
  constructor(
    private leaderBoardService = new LeaderBoardService(),
    private teamService = new TeamsService(),
    private buildTeamSort = new BuildTeamSort(),
  ) {}

  filterHomeRankings = async (req: Request, res: Response) => {
    const allNoProgress = await this.leaderBoardService.findAllNoProgress();

    const filterHome = await this.leaderBoardService.statusHomeRanking(allNoProgress);

    const buildTable = await this.buildTable(filterHome);

    const buildTableSort = this.buildTeamSort.buildSort(buildTable);

    return res.status(200).json(buildTableSort);
  };

  filterAwayRankings = async (req: Request, res: Response) => {
    const allNoProgress = await this.leaderBoardService.findAllNoProgress();

    const filterAway = await this.leaderBoardService.statusAwayRanking(allNoProgress);

    const buildTable = await this.buildTable(filterAway);

    const buildTableSort = this.buildTeamSort.buildSort(buildTable);

    return res.status(200).json(buildTableSort);
  };

  buildTable = async (filterTeam: ILeaderSuport[]): Promise<ILeaderBoard[]> => {
    const allTeams = await this.teamService.findAll() as ITeam[];

    const builded = filterTeam.map((elem) => {
      const team = allTeams.find(({ id }) => id === elem.timeId);
      let buildTeam;
      if (team) {
        buildTeam = new BuildTeam(team.teamName as string, elem);
      }
      return buildTeam as ILeaderBoard;
    });
    return builded;
  };
}

// 1º Total de Vitórias; 2º Saldo de gols; 3º Gols a favor; 4º Gols sofridos.
