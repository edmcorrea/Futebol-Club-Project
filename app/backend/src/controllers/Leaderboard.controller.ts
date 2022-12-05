import { Request, Response } from 'express';
import TeamsService from '../services/Teams.service';
import LeaderBoardService from '../services/Leaderboard.service';
import BuildTeam from './helper/BuildTeam';
import { ILeaderBoard, ILeaderSuport, ITeam } from '../interfaces/interfaces';

export default class LeaderBoardController {
  constructor(
    private leaderBoardService = new LeaderBoardService(),
    private teamService = new TeamsService(),
  ) {}

  filterRankings = async (req: Request, res: Response) => {
    const key = req.url.slice(1);
    let filterTeam;
    const allNoProgress = await this.leaderBoardService.findAllNoProgress();

    const filterHome = this.leaderBoardService.statusHomeRanking(allNoProgress);
    const filterAway = this.leaderBoardService.statusAwayRanking(allNoProgress);

    if (key === 'home') {
      filterTeam = filterHome;
    } else if (key === 'away') {
      filterTeam = filterAway;
    } else {
      filterTeam = this.leaderBoardService.statusAllRaking(filterHome, filterAway);
    }

    const buildTable = await this.buildTable(filterTeam);

    const buildTableSort = BuildTeam.buildTeamSort(buildTable);

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
