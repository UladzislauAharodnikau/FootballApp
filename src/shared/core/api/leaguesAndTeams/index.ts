import instance from '../instance';

const LeaguesAndTeamsAPI = {
  getLeagues: () => instance.get('/leagues'),
  getLeagueTeams: (leagueId: number, seasonYear: number) =>
    instance.get(`/teams?league=${leagueId}&season=${seasonYear}`),
};

export default LeaguesAndTeamsAPI;
