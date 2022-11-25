import Teams from '../database/models/Teams';

export default class TeamsService {
  findAll = async () => {
    const teamsAll = await Teams.findAll();
    return teamsAll;
  };

  findById = async (id: string) => {
    const teamById = await Teams.findByPk(id);
    return teamById;
  };
}
