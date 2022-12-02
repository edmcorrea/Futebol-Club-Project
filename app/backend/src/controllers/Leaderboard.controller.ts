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

  filterRankings = async (req: Request, res: Response) => {
    const allNoProgress = await this.leaderBoardService.findAllNoProgress();

    const filterHome = this.leaderBoardService.statusHomeRanking(allNoProgress);
    const filterAway = this.leaderBoardService.statusAwayRanking(allNoProgress);
    console.log(filterAway);

    const filterAllTeams = this.leaderBoardService.statusAllRaking(filterHome, filterAway);

    const buildTable = await this.buildTable(filterAllTeams);

    const buildTableSort = this.buildTeamSort.buildSort(buildTable);

    return res.status(200).json(buildTableSort);
  };

  filterHomeAndAwayRankings = async (req: Request, res: Response) => {
    const key = req.url.slice(1);
    let filterTeam;
    const allNoProgress = await this.leaderBoardService.findAllNoProgress();

    if (key === 'home') {
      filterTeam = await this.leaderBoardService.statusHomeRanking(allNoProgress);
    } else {
      filterTeam = await this.leaderBoardService.statusAwayRanking(allNoProgress);
    }

    const buildTable = await this.buildTable(filterTeam);

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
