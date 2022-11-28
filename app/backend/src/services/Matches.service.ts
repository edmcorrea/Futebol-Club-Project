import { IMatch } from '../interfaces/interfaces';
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
    // console.log(insert);

    return dataValues;
  };

  findMatch = async (id: number) => {
    const findById = await Matches.findByPk(id);
    console.log(findById);
    return findById;
  };
}
