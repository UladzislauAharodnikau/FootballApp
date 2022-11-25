import React, {useEffect} from 'react';
import {SafeAreaContainer} from '@components/safeAreaContainer';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {LeaguesAndTeamsParamList} from 'modules/leaguesAndTeams/leaguesAndTeams.types';
import {LeaguesAndTeamsRoutes} from '@constants/routes.types';
import {StackNavigationProp} from '@react-navigation/stack';
import {useGetLeagueById} from 'shared/core/hooks/leaguesAndTeams';
import {SeasonList} from 'modules/leaguesAndTeams/screens/leagueDetails/components/seasonList/seasonList.component';
import {StyleSheet, Text, View} from 'react-native';

type LeagueDetailsStackProp = StackNavigationProp<
  LeaguesAndTeamsParamList,
  LeaguesAndTeamsRoutes.LeagueDetails
>;

export const LeagueDetails = () => {
  const {params} =
    useRoute<
      RouteProp<LeaguesAndTeamsParamList, LeaguesAndTeamsRoutes.LeagueDetails>
    >();

  const navigation = useNavigation<LeagueDetailsStackProp>();

  const league = useGetLeagueById(params.id);

  useEffect(() => {
    if (params?.leagueName && params?.id) {
      navigation.setOptions({title: params?.leagueName});
    }
  }, [params?.leagueName, params?.id, navigation]);

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
