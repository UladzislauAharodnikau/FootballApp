import {useQuery, useQueryClient} from 'react-query';
import LeaguesAndTeamsAPI from 'shared/core/api/leaguesAndTeams';
import {LeaguesAndTeamsQueryKeys} from 'shared/types/queryKeys.types';
import {AxiosResponse} from 'axios';
import {useEffect, useState} from 'react';
import {LeagueItem} from 'shared/types/leagueItem.types';
import {TeamItem} from 'shared/types/teamItem.types';
import {StatisticsType} from 'shared/types/teamStatistics.types';

type AxiosRequestType<T> = AxiosResponse<{response: T}>;
type QueryStateType<R> = {data: {response: R}};

type StatisticsParamsType = {
  seasonYear: number;
  teamId: number;
  leagueId: number;
};

const handleError = (err: unknown) => console.log(err?.message);

export const useGetLeagues = () => {
  const {data, error, isError, isLoading, isSuccess} = useQuery<
    AxiosRequestType<LeagueItem[]>
  >({
    queryKey: LeaguesAndTeamsQueryKeys.Leagues,
    queryFn: LeaguesAndTeamsAPI.getLeagues,
    onError: handleError,
  });

  return {
    data: data?.data.response ?? [],
    error,
    isError,
    isLoading,
    isSuccess,
  };
};

export const useGetLeagueById = (leagueId: number): LeagueItem | null => {
  const queryClient = useQueryClient();

  const [selectedLeague, setSelectedLeague] = useState<LeagueItem | null>(null);

  useEffect(() => {
    const state = queryClient.getQueryState<QueryStateType<LeagueItem[]>>(
      LeaguesAndTeamsQueryKeys.Leagues,
    )?.data?.data?.response;

    const leagueItem = state?.find(({league}) => league?.id === leagueId);

    setSelectedLeague(leagueItem ?? null);
  }, [leagueId, queryClient]);

  return selectedLeague;
};

export const useGetTeams = (leagueId: number, seasonYear: number) => {
  const {data, isError, error, isLoading} = useQuery<
    AxiosRequestType<TeamItem[]>
  >({
    queryKey: [LeaguesAndTeamsQueryKeys.Teams, leagueId],
    queryFn: () => LeaguesAndTeamsAPI.getLeagueTeams(leagueId, seasonYear),
    onError: handleError,
  });

  return {data: data?.data.response, error, isError, isLoading};
};

export const useGetTeamById = (
  teamId: number,
  leagueId: number,
): TeamItem | null => {
  const queryClient = useQueryClient();

  const [team, setTeam] = useState<TeamItem | null>(null);

  useEffect(() => {
    const state = queryClient.getQueryState<QueryStateType<TeamItem[]>>([
      LeaguesAndTeamsQueryKeys.Teams,
      leagueId,
    ])?.data?.data.response;

    const selectedTeam = state?.find(teamItem => teamItem.team.id === teamId);

    setTeam(selectedTeam ?? null);
  }, [leagueId, queryClient, teamId]);

  return team;
};

export const useGetStatistics = ({
  seasonYear,
  teamId,
  leagueId,
}: StatisticsParamsType) => {
  const {data, isError, error, isLoading} = useQuery<
    AxiosRequestType<StatisticsType>
  >({
    queryKey: LeaguesAndTeamsQueryKeys.Statistics,
    queryFn: () =>
      LeaguesAndTeamsAPI.getTeamStatistics({seasonYear, teamId, leagueId}),
    onError: handleError,
  });

  return {data: data?.data.response, isError, isLoading, error};
};
