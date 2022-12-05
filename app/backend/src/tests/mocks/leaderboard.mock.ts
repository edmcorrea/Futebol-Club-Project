const mockMatches = [
  {
    id: 1,
    homeTeam: 16,
    homeTeamGoals: 1,
    awayTeam: 8,
    awayTeamGoals: 1,
    inProgress: 0
  },
  {
    id: 2,
    homeTeam: 9,
    homeTeamGoals: 1,
    awayTeam: 14,
    awayTeamGoals: 1,
    inProgress: 0
  },
  {
    id: 3,
    homeTeam: 4,
    homeTeamGoals: 3,
    awayTeam: 11,
    awayTeamGoals: 0,
    inProgress: 0
  },
  {
    id: 4,
    homeTeam: 3,
    homeTeamGoals: 0,
    awayTeam: 2,
    awayTeamGoals: 0,
    inProgress: 0
  },
  {
    id: 5,
    homeTeam: 7,
    homeTeamGoals: 1,
    awayTeam: 10,
    awayTeamGoals: 1,
    inProgress: 0
  },
  {
    id: 6,
    homeTeam: 5,
    homeTeamGoals: 1,
    awayTeam: 13,
    awayTeamGoals: 1,
    inProgress: 0
  },
  {
    id: 7,
    homeTeam: 12,
    homeTeamGoals: 2,
    awayTeam: 6,
    awayTeamGoals: 2,
    inProgress: 0
  },
  {
    id: 8,
    homeTeam: 15,
    homeTeamGoals: 0,
    awayTeam: 1,
    awayTeamGoals: 1,
    inProgress: 0
  },
  {
    id: 9,
    homeTeam: 1,
    homeTeamGoals: 0,
    awayTeam: 12,
    awayTeamGoals: 3,
    inProgress: 0
  },
  {
    id: 10,
    homeTeam: 2,
    homeTeamGoals: 0,
    awayTeam: 9,
    awayTeamGoals: 2,
    inProgress: 0
  },
  {
    id: 11,
    homeTeam: 13,
    homeTeamGoals: 1,
    awayTeam: 3,
    awayTeamGoals: 0,
    inProgress: 0
  },
  {
    id: 12,
    homeTeam: 6,
    homeTeamGoals: 0,
    awayTeam: 4,
    awayTeamGoals: 1,
    inProgress: 0
  },
  {
    id: 13,
    homeTeam: 8,
    homeTeamGoals: 2,
    awayTeam: 5,
    awayTeamGoals: 1,
    inProgress: 0
  },
  {
    id: 14,
    homeTeam: 14,
    homeTeamGoals: 2,
    awayTeam: 16,
    awayTeamGoals: 1,
    inProgress: 0
  },
  {
    id: 15,
    homeTeam: 10,
    homeTeamGoals: 0,
    awayTeam: 15,
    awayTeamGoals: 1,
    inProgress: 0
  },
  {
    id: 16,
    homeTeam: 11,
    homeTeamGoals: 0,
    awayTeam: 7,
    awayTeamGoals: 0,
    inProgress: 0
  },
  {
    id: 17,
    homeTeam: 1,
    homeTeamGoals: 2,
    awayTeam: 8,
    awayTeamGoals: 3,
    inProgress: 0
  },
  {
    id: 18,
    homeTeam: 12,
    homeTeamGoals: 4,
    awayTeam: 5,
    awayTeamGoals: 2,
    inProgress: 0
  },
  {
    id: 19,
    homeTeam: 11,
    homeTeamGoals: 2,
    awayTeam: 2,
    awayTeamGoals: 2,
    inProgress: 0
  },
  {
    id: 20,
    homeTeam: 7,
    homeTeamGoals: 0,
    awayTeam: 9,
    awayTeamGoals: 1,
    inProgress: 0
  },
  {
    id: 21,
    homeTeam: 6,
    homeTeamGoals: 3,
    awayTeam: 13,
    awayTeamGoals: 1,
    inProgress: 0
  },
  {
    id: 22,
    homeTeam: 4,
    homeTeamGoals: 3,
    awayTeam: 3,
    awayTeamGoals: 1,
    inProgress: 0
  },
  {
    id: 23,
    homeTeam: 15,
    homeTeamGoals: 2,
    awayTeam: 16,
    awayTeamGoals: 3,
    inProgress: 0
  },
  {
    id: 24,
    homeTeam: 10,
    homeTeamGoals: 2,
    awayTeam: 14,
    awayTeamGoals: 2,
    inProgress: 0
  },
  {
    id: 25,
    homeTeam: 2,
    homeTeamGoals: 0,
    awayTeam: 6,
    awayTeamGoals: 1,
    inProgress: 0
  },
  {
    id: 26,
    homeTeam: 13,
    homeTeamGoals: 1,
    awayTeam: 1,
    awayTeamGoals: 0,
    inProgress: 0
  },
  {
    id: 27,
    homeTeam: 5,
    homeTeamGoals: 1,
    awayTeam: 15,
    awayTeamGoals: 2,
    inProgress: 0
  },
  {
    id: 28,
    homeTeam: 16,
    homeTeamGoals: 3,
    awayTeam: 7,
    awayTeamGoals: 0,
    inProgress: 0
  },
  {
    id: 29,
    homeTeam: 9,
    homeTeamGoals: 0,
    awayTeam: 4,
    awayTeamGoals: 4,
    inProgress: 0
  },
  {
    id: 30,
    homeTeam: 3,
    homeTeamGoals: 0,
    awayTeam: 12,
    awayTeamGoals: 4,
    inProgress: 0
  },
  {
    id: 31,
    homeTeam: 8,
    homeTeamGoals: 2,
    awayTeam: 10,
    awayTeamGoals: 0,
    inProgress: 0
  },
  {
    id: 32,
    homeTeam: 14,
    homeTeamGoals: 5,
    awayTeam: 11,
    awayTeamGoals: 1,
    inProgress: 0
  },
  {
    id: 33,
    homeTeam: 1,
    homeTeamGoals: 1,
    awayTeam: 16,
    awayTeamGoals: 1,
    inProgress: 0
  },
  {
    id: 34,
    homeTeam: 9,
    homeTeamGoals: 3,
    awayTeam: 6,
    awayTeamGoals: 1,
    inProgress: 0
  },
  {
    id: 35,
    homeTeam: 10,
    homeTeamGoals: 1,
    awayTeam: 5,
    awayTeamGoals: 3,
    inProgress: 0
  },
  {
    id: 36,
    homeTeam: 2,
    homeTeamGoals: 0,
    awayTeam: 7,
    awayTeamGoals: 1,
    inProgress: 0
  },
  {
    id: 37,
    homeTeam: 15,
    homeTeamGoals: 0,
    awayTeam: 13,
    awayTeamGoals: 1,
    inProgress: 0
  },
  {
    id: 38,
    homeTeam: 14,
    homeTeamGoals: 2,
    awayTeam: 4,
    awayTeamGoals: 1,
    inProgress: 0
  },
  {
    id: 39,
    homeTeam: 3,
    homeTeamGoals: 2,
    awayTeam: 11,
    awayTeamGoals: 0,
    inProgress: 0
  },
  {
    id: 40,
    homeTeam: 12,
    homeTeamGoals: 4,
    awayTeam: 8,
    awayTeamGoals: 1,
    inProgress: 0
  },
  {
    id: 49,
    homeTeam: 4,
    homeTeamGoals: 2,
    awayTeam: 9,
    awayTeamGoals: 1,
    inProgress: 0
  }
]

const mockTeams = [
  { id: 1, teamName: 'Avaí/Kindermann' },
  { id: 2, teamName: 'Bahia' },
  { id: 3, teamName: 'Botafogo' },
  { id: 4, teamName: 'Corinthians' },
  { id: 5, teamName: 'Cruzeiro' },
  { id: 6, teamName: 'Ferroviária' },
  { id: 7, teamName: 'Flamengo' },
  { id: 8, teamName: 'Grêmio' },
  { id: 9, teamName: 'Internacional' },
  { id: 10, teamName: 'Minas Brasília' },
  { id: 11, teamName: 'Napoli-SC' },
  { id: 12, teamName: 'Palmeiras' },
  { id: 13, teamName: 'Real Brasília' },
  { id: 14, teamName: 'Santos' },
  { id: 15, teamName: 'São José-SP' },
  { id: 16, teamName: 'São Paulo' }
]

export {mockMatches, mockTeams}
