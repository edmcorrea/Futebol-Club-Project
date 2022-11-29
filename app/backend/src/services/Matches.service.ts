import { IMatch, IScoreMatch } from '../interfaces/interfaces';
import Matches from '../database/models/Matches';

export default class MatchesService {
  getMatches = async () => {
    const findAll = await Matches.findAll({
      include: { all: true, attributes: { exclude: ['id'] } } });
    return findAll;
  };

  insertMatch = async (match: IMatch) => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = match;
    const { dataValues } = await Matches.create({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true,
    });
    return dataValues;
  };

  findMatch = async (id: number) => {
    const findById = await Matches.findByPk(id);
    return findById;
  };

  updateStatusMatch = async (id: string) => {
    const updated = await Matches.update({ inProgress: false }, { where: { id } });
    return updated;
  };

  updateScoreMatch = async (id: string, { homeTeamGoals, awayTeamGoals }: IScoreMatch) => {
    const updated = await Matches.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
    return updated;
  };
}
