import React, {memo} from 'react';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';
import {SeasonType} from 'shared/types/leagueItem.types';
import {SeasonCard} from 'modules/leaguesAndTeams/screens/leagueDetails/components/seasonCard/seasonCard.component';
import {Divider} from '@components/divider';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {LeaguesAndTeamsParamList} from 'modules/leaguesAndTeams/leaguesAndTeams.types';
import {LeaguesAndTeamsRoutes} from 'shared/types/routes.types';
import {testProps} from 'shared/utils/testProps';

type TeamListStackProp = StackNavigationProp<
  LeaguesAndTeamsParamList,
  LeaguesAndTeamsRoutes.TeamList
>;

interface SeasonListProps {
  data: SeasonType[];
  leagueId: number;
  leagueName: string;
}

export const SeasonList: React.FC<SeasonListProps> = memo(
  ({data, leagueId, leagueName}) => {
    const {navigate} = useNavigation<TeamListStackProp>();

    const renderItem = ({item}: ListRenderItemInfo<SeasonType>) => {
      const onSeasonCardPress = () => {
        navigate({
          name: LeaguesAndTeamsRoutes.TeamList,
          params: {leagueId, seasonYear: item.year, leagueName},
        });
      };

      return <SeasonCard season={item} onSeasonCardPress={onSeasonCardPress} />;
    };

    return (
      <FlatList
        {...testProps('season-list-id')}
        data={data}
        keyExtractor={({year}) => year.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Divider opacity={0.5} />}
        ListEmptyComponent={() => (
          <View>
            <Text>List is empty</Text>
          </View>
        )}
        ListFooterComponent={() => <Divider opacity={0.5} />}
      />
    );
  },
);
