import React, {memo} from 'react';
import {FlatList, View, ListRenderItemInfo, Text} from 'react-native';
import {TeamItem} from 'shared/types/teamItem.types';
import {TeamCard} from 'modules/leaguesAndTeams/screens/teamList/components/teamCard/teamCard.component';
import {Divider} from '@components/divider';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {LeaguesAndTeamsParamList} from 'modules/leaguesAndTeams/leaguesAndTeams.types';
import {LeaguesAndTeamsRoutes} from 'shared/types/routes.types';
import {testProps} from 'shared/utils/testProps';

type TeamDetailsStackProp = StackNavigationProp<
  LeaguesAndTeamsParamList,
  LeaguesAndTeamsRoutes.TeamDetails
>;

interface TeamCardListProps {
  data: TeamItem[];
  leagueId: number;
  seasonYear: number;
}

export const TeamCardList: React.FC<TeamCardListProps> = memo(
  ({data, leagueId, seasonYear}) => {
    const {navigate} = useNavigation<TeamDetailsStackProp>();

    const renderItem = ({item}: ListRenderItemInfo<TeamItem>) => {
      const onTeamCardPress = () => {
        navigate({
          name: LeaguesAndTeamsRoutes.TeamDetails,
          params: {teamId: item.team.id, leagueId, seasonYear},
        });
      };

      return <TeamCard team={item.team} onTeamCardPress={onTeamCardPress} />;
    };

    return (
      <FlatList
        {...testProps('team-list-id')}
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Divider opacity={0.5} />}
        keyExtractor={({team}) => team.id.toString()}
        ListEmptyComponent={() => (
          <View>
            <Text>List of teams is empty</Text>
          </View>
        )}
      />
    );
  },
);
