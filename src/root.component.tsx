import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabRoutes} from 'root.types';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CoachesAndPlayersModule from 'modules/coachesAndPlayers/coachesAndPlayers.component';
import {TabBar} from '@components/tabBar';
import {QueryClientProvider, QueryClient} from 'react-query';
import LeaguesAndTeamsModule from 'modules/leaguesAndTeams/liguesAndTeams.component';

const client = new QueryClient({
  defaultOptions: {
    queries: {refetchOnWindowFocus: false, staleTime: 30000},
  },
});

const tabs = [
  {name: TabRoutes.LiguesAndTeams, component: LeaguesAndTeamsModule},
  {name: TabRoutes.CoachesAndPlayers, component: CoachesAndPlayersModule},
  {name: TabRoutes.WishList, component: CoachesAndPlayersModule},
  {name: TabRoutes.Transfers, component: CoachesAndPlayersModule},
  {name: TabRoutes.Profile, component: CoachesAndPlayersModule},
];

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <TabBar {...props} />}>
      {tabs.map(tab => (
        <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
};

export const Root = () => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={client}>
        <NavigationContainer>
          <TabsNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};
