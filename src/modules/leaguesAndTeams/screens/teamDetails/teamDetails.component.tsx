import React, {useEffect} from 'react';
import {SafeAreaContainer} from '@components/safeAreaContainer';
import {ScreenContainer} from '@components/screenContainer';
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';
import {LeaguesAndTeamsParamList} from 'modules/leaguesAndTeams/leaguesAndTeams.types';
import {LeaguesAndTeamsRoutes} from '@constants/routes.types';
import {useGetTeamById} from 'shared/core/hooks/leaguesAndTeams';
import {TeamDetailsCard} from 'modules/leaguesAndTeams/screens/teamDetails/components/teamDetailsCard/teamDetailsCard.component';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Theme} from '@constants/theme';
import {defaultHitSlop} from '@constants/common';
import {StackNavigationProp} from '@react-navigation/stack';

type TeamDetailsRouteProp = RouteProp<
  LeaguesAndTeamsParamList,
  LeaguesAndTeamsRoutes.TeamDetails
>;

type TeamStatisticsStackProp = StackNavigationProp<
  LeaguesAndTeamsParamList,
  LeaguesAndTeamsRoutes.TeamStatistics
>;

const TeamDetails = () => {
  const {params} = useRoute<TeamDetailsRouteProp>();

  const navigation = useNavigation<TeamStatisticsStackProp>();

  const selectedTeam = useGetTeamById(params?.teamId, params?.leagueId);

  useEffect(() => {
    if (selectedTeam) {
      navigation.setOptions({
        title: selectedTeam.team.name ?? '',
      });
    }
  }, [selectedTeam, navigation]);

  const onShowStatisticPress = () => {
    navigation.navigate({
      name: LeaguesAndTeamsRoutes.TeamStatistics,
      params: {
        leagueId: params?.leagueId,
        seasonYear: params?.seasonYear,
        teamId: params?.teamId,
      },
    });
  };

  return (
    <SafeAreaContainer>
      <ScreenContainer>
        <TeamDetailsCard teamInfo={selectedTeam} />
        <View style={styles.showMoreContainer}>
          <Text>
            <Pressable onPress={onShowStatisticPress} hitSlop={defaultHitSlop}>
              <Text style={styles.content}>Show statistics</Text>
            </Pressable>
          </Text>
        </View>
      </ScreenContainer>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  showMoreContainer: {
    marginTop: 25,
    alignItems: 'center',
  },
  content: {
    color: Theme.purple,
  },
});

export default TeamDetails;
