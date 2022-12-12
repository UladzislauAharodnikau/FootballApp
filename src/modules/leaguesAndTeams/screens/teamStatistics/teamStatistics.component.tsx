import React, {useEffect, useState} from 'react';
import {SafeAreaContainer} from '@components/safeAreaContainer';
import {ScreenContainer} from '@components/screenContainer';
import {useGetStatistics} from 'shared/core/hooks/leaguesAndTeams';
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';
import {LeaguesAndTeamsParamList} from 'modules/leaguesAndTeams/leaguesAndTeams.types';
import {LeaguesAndTeamsRoutes} from 'shared/types/routes.types';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Theme} from '@constants/theme';

type TeamStatisticsRouteProp = RouteProp<
  LeaguesAndTeamsParamList,
  LeaguesAndTeamsRoutes.TeamStatistics
>;

export const TeamStatistics = () => {
  const {params} = useRoute<TeamStatisticsRouteProp>();

  const {teamId, leagueId, seasonYear} = params;

  const navigation = useNavigation();

  const [titles, setTitles] = useState<string[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setProperties] = useState<string[]>([]);

  const {data, isLoading} = useGetStatistics({teamId, leagueId, seasonYear});

  useEffect(() => {
    if (data) {
      navigation.setOptions({
        title: `Statistics (${seasonYear})`,
      });

      const titleKeys = Object.keys(data.fixtures);

      setTitles(['', ...titleKeys]);
      setProperties(Object.keys(data.fixtures.draws));
    }
  }, [data, navigation, seasonYear]);

  return (
    <SafeAreaContainer>
      <ScreenContainer>
        {isLoading ? (
          <ActivityIndicator color={Theme.purple} size={20} />
        ) : (
          <View style={styles.titlesContainer}>
            {titles.map(item => (
              <View key={item}>
                <Text>{item}</Text>
              </View>
            ))}
          </View>
        )}
      </ScreenContainer>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  titlesContainer: {flexDirection: 'row', justifyContent: 'space-between'},
});

export default TeamStatistics;
