import { ILeaderBoard } from '../../interfaces/interfaces';

export default class BuildTeamSort {
  buildSort = (buildTable: ILeaderBoard[]) => {
    const buildTableSort = buildTable.sort((b: ILeaderBoard, a: ILeaderBoard): number => {
      let cmp = a.totalPoints - b.totalPoints;
      if (cmp === 0) {
        cmp = a.totalVictories - b.totalVictories;
        if (cmp === 0) {
          cmp = a.goalsBalance - b.goalsBalance;
          if (cmp === 0) {
            cmp = a.goalsFavor - b.goalsFavor;
          }
          if (cmp === 0) {
            cmp = a.goalsOwn - b.goalsOwn;
          }
        }
      }
      return cmp;
    });
    return buildTableSort;
  };
}

// 1º Total de Vitórias; 2º Saldo de gols; 3º Gols a favor; 4º Gols sofridos.
