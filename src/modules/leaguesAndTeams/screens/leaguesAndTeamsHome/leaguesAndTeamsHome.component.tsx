import React from 'react';
import {SafeAreaContainer} from '@components/safeAreaContainer';
import {ScreenContainer} from 'shared/components/screenContainer';
import {CardList} from '@components/cardList';
import {cardsData, CardKeys} from './leaguesAndTeamsHome.data';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {LeaguesAndTeamsRoutes} from '@constants/routes.types';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {LeaguesAndTeamsParamList} from 'modules/leaguesAndTeams/leaguesAndTeams.types';

type LeaguesDetailsScreenNavigationProp = NativeStackNavigationProp<
  LeaguesAndTeamsParamList,
  LeaguesAndTeamsRoutes.LeaguesList
>;

const LeaguesAndTeamsHome = () => {
  const {navigate} = useNavigation<LeaguesDetailsScreenNavigationProp>();

  const onCardPress = (type: string) => {
    if (type === CardKeys.League) {
      navigate({name: LeaguesAndTeamsRoutes.LeaguesList, params: undefined});
    } else {
    }
  };

  return (
    <SafeAreaContainer>
      <ScreenContainer style={styles.screenContainer}>
        <View style={styles.cardsContainer}>
          <CardList data={cardsData} onPress={onCardPress} />
        </View>
      </ScreenContainer>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: 'center',
  },
  cardsContainer: {
    alignItems: 'center',
  },
});

export default LeaguesAndTeamsHome;
