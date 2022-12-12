import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProfileParamsList} from './profile.types';
import {ProfileRoutes} from 'shared/types/routes.types';
import ProfileHome from 'modules/profile/screens/profileHome/profileHome.component';
import {getStackScreenOptions} from 'shared/utils/getStackScreenOptions';

export const ProfileStack = createStackNavigator<ProfileParamsList>();

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator screenOptions={getStackScreenOptions()}>
      <ProfileStack.Screen
        name={ProfileRoutes.ProfileHome}
        component={ProfileHome}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
