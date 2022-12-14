import {LeaguesAndTeamsRoutes} from 'shared/types/routes.types';

export type LeaguesAndTeamsParamList = {
  [LeaguesAndTeamsRoutes.LeaguesAndTeamsHome]: undefined;
  [LeaguesAndTeamsRoutes.LeaguesList]: undefined;
  [LeaguesAndTeamsRoutes.LeagueDetails]: {id: number; leagueName: string};
  [LeaguesAndTeamsRoutes.TeamList]: {
    leagueId: number;
    seasonYear: number;
    leagueName: string;
  };
  [LeaguesAndTeamsRoutes.TeamDetails]: {
    teamId: number;
    leagueId: number;
    seasonYear: number;
  };
  [LeaguesAndTeamsRoutes.TeamStatistics]: {
    leagueId: number;
    teamId: number;
    seasonYear: number;
  };
};
