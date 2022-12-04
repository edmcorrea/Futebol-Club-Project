const allMatchesMock = [
  {
    "id": 1,
    "homeTeam": 16,
    "homeTeamGoals": 1,
    "awayTeam": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "São Paulo"
    },
    "teamAway": {
      "teamName": "Grêmio"
    }
  },
  {
    "id": 2,
    "homeTeam": 9,
    "homeTeamGoals": 1,
    "awayTeam": 14,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "Internacional"
    },
    "teamAway": {
      "teamName": "Santos"
    }
  }, 
];

const createMatchMock = {
  "id": 49,
  "homeTeam": 12,
  "homeTeamGoals": 2,
  "awayTeam": 2,
  "awayTeamGoals": 2,
  "inProgress": true
}

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtbkBhZG1pbi5jb20iLCJpYXQiOjE2Njk2ODExNTMsImV4cCI6MTY3MDI4NTk1M30.V0-0bXDZKIFQzb7qmyQPQae8BeNhAIUmvB8musp4MVs'

export {allMatchesMock, createMatchMock, token}
