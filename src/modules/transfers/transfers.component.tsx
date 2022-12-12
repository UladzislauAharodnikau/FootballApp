import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TransfersParamsList} from 'modules/transfers/transfers.types';
import {TransfersRoutes} from 'shared/types/routes.types';
import TransfersHome from 'modules/transfers/screens/transfersHome/transfersHome.component';
import {getStackScreenOptions} from 'shared/utils/getStackScreenOptions';

const TransfersStack = createStackNavigator<TransfersParamsList>();

const TransfersNavigator = () => {
  return (
    <TransfersStack.Navigator screenOptions={getStackScreenOptions()}>
      <TransfersStack.Screen
        name={TransfersRoutes.TransfersHome}
        component={TransfersHome}
      />
    </TransfersStack.Navigator>
  );
};

export default TransfersNavigator;
