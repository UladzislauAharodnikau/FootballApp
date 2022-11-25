import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {LeaguesAndTeamsRoutes} from '@constants/routes.types';
import {getStackScreenOptions} from 'shared/utils/getStackScreenOptions';
import LeaguesAndTeamsHome from 'modules/leaguesAndTeams/screens/leaguesAndTeamsHome/leaguesAndTeamsHome.component';
import {LeaguesAndTeamsParamList} from 'modules/leaguesAndTeams/leaguesAndTeams.types';
import LeaguesList from 'modules/leaguesAndTeams/screens/leaguesList/leaguesList.component';
import LeagueDetails from 'modules/leaguesAndTeams/screens/leagueDetails/leagueDetails.component';
import TeamList from 'modules/leaguesAndTeams/screens/teamList/teamList.component';
import TeamDetails from 'modules/leaguesAndTeams/screens/teamDetails/teamDetails.component';

const LeaguesAndTeamsStack = createStackNavigator<LeaguesAndTeamsParamList>();

const screenOptions = ({
  title,
  headerShown = false,
  headerBackTitleVisible = false,
}: StackNavigationOptions) => ({
  headerShown,
  title,
  headerBackTitleVisible,
});

const LeaguesAndTeamsNavigator = () => {
  return (
    <LeaguesAndTeamsStack.Navigator screenOptions={getStackScreenOptions()}>
      <LeaguesAndTeamsStack.Screen
        name={LeaguesAndTeamsRoutes.LeaguesAndTeamsHome}
        component={LeaguesAndTeamsHome}
      />
      <LeaguesAndTeamsStack.Screen
        name={LeaguesAndTeamsRoutes.LeaguesList}
        component={LeaguesList}
        options={screenOptions({title: 'Leagues', headerShown: true})}
      />
      <LeaguesAndTeamsStack.Screen
        name={LeaguesAndTeamsRoutes.LeagueDetails}
        component={LeagueDetails}
        options={screenOptions({title: '', headerShown: true})}
      />
      <LeaguesAndTeamsStack.Screen
        name={LeaguesAndTeamsRoutes.TeamList}
        component={TeamList}
        options={screenOptions({title: '', headerShown: true})}
      />
      <LeaguesAndTeamsStack.Screen
        name={LeaguesAndTeamsRoutes.TeamDetails}
        component={TeamDetails}
        options={screenOptions({title: '', headerShown: true})}
      />
    </LeaguesAndTeamsStack.Navigator>
  );
};

export default LeaguesAndTeamsNavigator;
