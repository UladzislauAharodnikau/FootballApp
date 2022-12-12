import React, {memo} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {LeagueCard} from '../leagueCard/leagueCard.component';
import {LeagueItem} from 'shared/types/leagueItem.types';
import {Divider} from '@components/divider';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {LeaguesAndTeamsParamList} from 'modules/leaguesAndTeams/leaguesAndTeams.types';
import {LeaguesAndTeamsRoutes} from 'shared/types/routes.types';
import {testProps} from 'shared/utils/testProps';

type LeaguesDetailsStackProp = StackNavigationProp<
  LeaguesAndTeamsParamList,
  LeaguesAndTeamsRoutes.LeagueDetails
>;

interface LeagueListProps {
  data: LeagueItem[];
}

export const LeagueCardList: React.FC<LeagueListProps> = memo(({data}) => {
  const {navigate} = useNavigation<LeaguesDetailsStackProp>();

  const onLeagueCardPress = (id: number, leagueName: string) => {
    navigate({
      name: LeaguesAndTeamsRoutes.LeagueDetails,
      params: {id, leagueName},
    });
  };

  const renderItem = ({item}: ListRenderItemInfo<LeagueItem>) => {
    return <LeagueCard onLeagueCardPress={onLeagueCardPress} league={item} />;
  };

  return (
    <FlatList
      {...testProps('leagues-list-id')}
      data={data}
      renderItem={renderItem}
      keyExtractor={({league}) => league?.id?.toString()}
      ItemSeparatorComponent={() => <Divider opacity={0.5} />}
    />
  );
});
