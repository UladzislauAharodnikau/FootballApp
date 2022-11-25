import React, {useEffect} from 'react';
import {SafeAreaContainer} from '@components/safeAreaContainer';
import {ScreenContainer} from '@components/screenContainer';
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';
import {LeaguesAndTeamsParamList} from 'modules/leaguesAndTeams/leaguesAndTeams.types';
import {LeaguesAndTeamsRoutes} from '@constants/routes.types';
import {useGetTeamById} from 'shared/core/hooks/leaguesAndTeams';
import {TeamDetailsCard} from 'modules/leaguesAndTeams/screens/teamDetails/components/teamDetailsCard/teamDetailsCard.component';

type TeamDetailsRouteProp = RouteProp<
  LeaguesAndTeamsParamList,
  LeaguesAndTeamsRoutes.TeamDetails
>;

const TeamDetails = () => {
  const {params} = useRoute<TeamDetailsRouteProp>();

  const navigation = useNavigation();

  const selectedTeam = useGetTeamById(params?.teamId, params?.leagueId);

  useEffect(() => {
    if (selectedTeam) {
      navigation.setOptions({
        title: selectedTeam.team.name ?? '',
      });
    }
  }, [selectedTeam, navigation]);

  return (
    <SafeAreaContainer>
      <ScreenContainer>
        <TeamDetailsCard teamInfo={selectedTeam} />
      </ScreenContainer>
    </SafeAreaContainer>
  );
};

export default TeamDetails;
