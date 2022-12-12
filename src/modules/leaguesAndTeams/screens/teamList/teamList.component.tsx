import React from 'react';
import {SafeAreaContainer} from '@components/safeAreaContainer';
import {RouteProp, useRoute} from '@react-navigation/native';
import {LeaguesAndTeamsParamList} from 'modules/leaguesAndTeams/leaguesAndTeams.types';
import {LeaguesAndTeamsRoutes} from 'shared/types/routes.types';
import {useGetTeams} from 'shared/core/hooks/leaguesAndTeams';
import {TeamCardList} from 'modules/leaguesAndTeams/screens/teamList/components/teamCardList/teamCardList.component';
import {ActivityIndicator} from 'react-native';
import {Theme} from '@constants/theme';
import {testProps} from 'shared/utils/testProps';

const TeamList = () => {
  const {params} =
    useRoute<
      RouteProp<LeaguesAndTeamsParamList, LeaguesAndTeamsRoutes.TeamList>
    >();

  const {data, isLoading} = useGetTeams(params.leagueId, params.seasonYear);

  return (
    <SafeAreaContainer>
      {isLoading ? (
        <ActivityIndicator
          {...testProps('activity-indicator')}
          size={20}
          color={Theme.purple}
        />
      ) : (
        <TeamCardList
          data={data ?? []}
          leagueId={params?.leagueId}
          seasonYear={params?.seasonYear}
        />
      )}
    </SafeAreaContainer>
  );
};

export default TeamList;
