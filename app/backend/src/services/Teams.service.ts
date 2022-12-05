import Teams from '../database/models/Teams';

export default class TeamsService {
  findAll = async () => {
    const teamsAll = await Teams.findAll({ raw: true });
    return teamsAll;
  };

  findById = async (id: string | number) => {
    const teamById = await Teams.findByPk(id);
    return teamById;
  };
}
