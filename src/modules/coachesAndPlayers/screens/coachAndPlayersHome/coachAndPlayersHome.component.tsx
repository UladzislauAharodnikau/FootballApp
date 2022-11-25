import React from 'react';
import {Text} from 'react-native';
import {SafeAreaContainer} from '@components/safeAreaContainer';
import {ScreenContainer} from '@components/screenContainer';
import {useQuery} from 'react-query';
import LeaguesAndTeamsAPI from 'shared/core/api/leaguesAndTeams';
import {useGetLeagues} from 'shared/core/hooks/leaguesAndTeams';

export const CoachAndPlayersHome = () => {
  // const {data, error, isError} = useGetLeagues();
  // console.log('info:', info);
  return (
    <SafeAreaContainer>
      <ScreenContainer>
        <Text>CoachAndPlayersHome</Text>
      </ScreenContainer>
    </SafeAreaContainer>
  );
};
