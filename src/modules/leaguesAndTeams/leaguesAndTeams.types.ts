import {LeaguesAndTeamsRoutes} from '@constants/routes.types';

export type LeaguesAndTeamsParamList = {
  [LeaguesAndTeamsRoutes.LeaguesAndTeamsHome]: undefined;
  [LeaguesAndTeamsRoutes.LeaguesList]: undefined;
  [LeaguesAndTeamsRoutes.LeagueDetails]: {id: number; leagueName: string};
  [LeaguesAndTeamsRoutes.TeamList]: {
    leagueId: number;
    seasonYear: number;
    leagueName: string;
  };
  [LeaguesAndTeamsRoutes.TeamDetails]: {teamId: number; leagueId: number};
};
