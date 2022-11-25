import React, {useEffect} from 'react';
import {SafeAreaContainer} from '@components/safeAreaContainer';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {LeaguesAndTeamsParamList} from 'modules/leaguesAndTeams/leaguesAndTeams.types';
import {LeaguesAndTeamsRoutes} from '@constants/routes.types';
import {useGetTeams} from 'shared/core/hooks/leaguesAndTeams';
import {TeamCardList} from 'modules/leaguesAndTeams/screens/teamList/components/teamCardList/teamCardList.component';

const TeamList = () => {
  const {params} =
    useRoute<
      RouteProp<LeaguesAndTeamsParamList, LeaguesAndTeamsRoutes.TeamList>
    >();
  const navigation = useNavigation();

  const {data} = useGetTeams(params.leagueId, params.seasonYear);

  useEffect(() => {
    navigation.setOptions({
      title: params.leagueName ?? '',
    });
  }, [navigation, params.leagueName]);

  return (
    <SafeAreaContainer>
      <TeamCardList data={data ?? []} leagueId={params.leagueId} />
    </SafeAreaContainer>
  );
};

export default TeamList;
