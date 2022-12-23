import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabRoutes} from 'root.types';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CoachesAndPlayersModule from 'modules/coachesAndPlayers/coachesAndPlayers.component';
import {TabBar} from '@components/tabBar';
import {QueryClientProvider, QueryClient} from 'react-query';
import LeaguesAndTeamsModule from 'modules/leaguesAndTeams/liguesAndTeams.component';
import WishListModule from 'modules/wishList/wishList.component';
import TransfersModule from 'modules/transfers/transfers.component';
import ProfileModule from 'modules/profile/profile.component';
import Notifications from 'modules/forNativeModule/notifications.component';

import RNShake from 'react-native-shake';
import {IS_ANDROID} from '@constants/common';
import {Alert} from 'react-native';

const client = new QueryClient({
  defaultOptions: {
    queries: {refetchOnWindowFocus: false, staleTime: 30000},
  },
});

const tabs = [
  {name: TabRoutes.LiguesAndTeams, component: LeaguesAndTeamsModule},
  {name: TabRoutes.CoachesAndPlayers, component: CoachesAndPlayersModule},
  {name: TabRoutes.WishList, component: WishListModule},
  {name: TabRoutes.Transfers, component: TransfersModule},
  {name: TabRoutes.Profile, component: ProfileModule},
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
  const [toggleScreen, setToggleScreen] = useState<boolean>(false);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      if (IS_ANDROID) {
        setToggleScreen(prev => !prev);
      } else {
        Alert.alert(
          'Denied',
          'can get access to the screen. Available only for android platform at this moment',
        );
      }
    });

    return () => subscription.remove();
  }, []);

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={client}>
        <NavigationContainer>
          {toggleScreen ? <Notifications /> : <TabsNavigator />}
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};
