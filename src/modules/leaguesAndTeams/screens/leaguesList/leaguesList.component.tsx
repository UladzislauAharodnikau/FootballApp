import React, {useEffect} from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {ScreenContainer} from '@components/screenContainer';
import {useGetLeagues} from 'shared/core/hooks/leaguesAndTeams';
import {LeagueCardList} from 'modules/leaguesAndTeams/screens/leaguesList/components/leagueCardList/leagueCardList.component';
import {Theme} from '@constants/theme';
import {LeagueItem} from 'shared/types/leagueItem.types';
import {useQueryClient} from 'react-query';
import {LeaguesAndTeamsQueryKeys} from 'shared/types/queryKeys.types';

export const LeaguesDetails = () => {
  const {data, isLoading} = useGetLeagues();

  return (
    <ScreenContainer style={styles.screenContainer}>
      {isLoading ? (
        <ActivityIndicator size={20} color={Theme.purple} />
      ) : (
        <LeagueCardList data={data} />
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    paddingTop: 10,
    paddingHorizontal: 0,
  },
});

export default LeaguesDetails;
