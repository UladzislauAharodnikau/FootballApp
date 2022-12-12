import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {WishListParamsList} from 'modules/wishList/wishList.types';
import {WishListRoutes} from 'shared/types/routes.types';
import WishListHome from 'modules/wishList/screens/wishListHome/wishListHome.component';
import {getStackScreenOptions} from 'shared/utils/getStackScreenOptions';

const WishListStack = createStackNavigator<WishListParamsList>();

const WishListNavigator = () => {
  return (
    <WishListStack.Navigator screenOptions={getStackScreenOptions()}>
      <WishListStack.Screen
        name={WishListRoutes.WishListHome}
        component={WishListHome}
      />
    </WishListStack.Navigator>
  );
};

export default WishListNavigator;
