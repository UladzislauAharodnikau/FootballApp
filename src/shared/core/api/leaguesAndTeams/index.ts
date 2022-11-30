import instance from '../instance';

const LeaguesAndTeamsAPI = {
  getLeagues: () => instance.get('/leagues'),
  getLeagueTeams: (leagueId: number, seasonYear: number) =>
    instance.get(`/teams?league=${leagueId}&season=${seasonYear}`),
  getTeamStatistics: ({
    teamId,
    seasonYear,
    leagueId,
  }: {
    teamId: number;
    seasonYear: number;
    leagueId: number;
  }) =>
    instance.get(
      `/teams/statistics?season=${seasonYear}&team=${teamId}&league=${leagueId}`,
    ),
};

export default LeaguesAndTeamsAPI;
