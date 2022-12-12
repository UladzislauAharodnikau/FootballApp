import React from 'react';
import {SafeAreaContainer} from '@components/safeAreaContainer';
import {ScreenContainer} from '@components/screenContainer';
import {Text, View} from 'react-native';
import {testProps} from 'shared/utils/testProps';

export const TransfersHome = () => {
  return (
    <SafeAreaContainer>
      <ScreenContainer>
        <View {...testProps('wrapper-transfers-module-id')}>
          <Text>TransfersModule</Text>
        </View>
      </ScreenContainer>
    </SafeAreaContainer>
  );
};

export default TransfersHome;
