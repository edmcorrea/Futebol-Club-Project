import Teams from '../database/models/Teams';

export default class TeamsService {
  findAll = async () => {
    const teamsAll = await Teams.findAll();
    return teamsAll;
  };
}
