import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CoachesAndPlayersParamList} from './coachesAndPlayers.types';
import {CoachesAndPlayersRoutes} from 'shared/types/routes.types';
import {CoachAndPlayersHome} from './screens/coachAndPlayersHome/coachAndPlayersHome.component';
import {getStackScreenOptions} from 'shared/utils/getStackScreenOptions';

const CoachesAndPlayersStack =
  createStackNavigator<CoachesAndPlayersParamList>();

const CoachesAndPlayersNavigator = () => {
  return (
    <CoachesAndPlayersStack.Navigator screenOptions={getStackScreenOptions()}>
      <CoachesAndPlayersStack.Screen
        name={CoachesAndPlayersRoutes.CoachesAndPlayersHome}
        component={CoachAndPlayersHome}
      />
    </CoachesAndPlayersStack.Navigator>
  );
};

export default CoachesAndPlayersNavigator;
