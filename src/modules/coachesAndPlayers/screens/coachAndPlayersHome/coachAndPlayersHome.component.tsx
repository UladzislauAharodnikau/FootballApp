import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaContainer} from '@components/safeAreaContainer';
import {ScreenContainer} from '@components/screenContainer';
import {testProps} from 'shared/utils/testProps';

export const CoachAndPlayersHome = () => {
  return (
    <SafeAreaContainer>
      <ScreenContainer>
        <View {...testProps('wrapper-coaches-players-id')}>
          <Text>CoachAndPlayersHome</Text>
        </View>
      </ScreenContainer>
    </SafeAreaContainer>
  );
};
