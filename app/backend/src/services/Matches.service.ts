// import Teams from '../database/models/Teams';
import Matches from '../database/models/Matches';

export default class MatchesService {
  getMatches = async () => {
    const findAll = await Matches.findAll({
      include: { all: true, attributes: { exclude: ['id'] } } });
    return findAll;
  };
}
