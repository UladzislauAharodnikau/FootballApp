import React from 'react';
import {SafeAreaContainer} from '@components/safeAreaContainer';
import {RouteProp, useRoute} from '@react-navigation/native';
import {LeaguesAndTeamsParamList} from 'modules/leaguesAndTeams/leaguesAndTeams.types';
import {LeaguesAndTeamsRoutes} from 'shared/types/routes.types';
import {useGetLeagueById} from 'shared/core/hooks/leaguesAndTeams';
import {SeasonList} from 'modules/leaguesAndTeams/screens/leagueDetails/components/seasonList/seasonList.component';
import {StyleSheet, Text, View} from 'react-native';

export const LeagueDetails = () => {
  const {params} =
    useRoute<
      RouteProp<LeaguesAndTeamsParamList, LeaguesAndTeamsRoutes.LeagueDetails>
    >();

  const league = useGetLeagueById(params.id);

  return (
    <SafeAreaContainer>
      <View style={styles.contentContainer}>
        <Text>Seasons:</Text>
      </View>
      <SeasonList
        data={league?.seasons ?? []}
        leagueId={params?.id}
        leagueName={params?.leagueName}
      />
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 10,
  },
});

export default LeagueDetails;
