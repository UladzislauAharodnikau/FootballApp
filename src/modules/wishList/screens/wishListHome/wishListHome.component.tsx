import React from 'react';
import {SafeAreaContainer} from '@components/safeAreaContainer';
import {ScreenContainer} from '@components/screenContainer';
import {Text, View} from 'react-native';
import {testProps} from 'shared/utils/testProps';

const WishListHome = () => {
  return (
    <SafeAreaContainer>
      <ScreenContainer>
        <View {...testProps('wrapper-wish-list-id')}>
          <Text>WishListHomeModule</Text>
        </View>
      </ScreenContainer>
    </SafeAreaContainer>
  );
};

export default WishListHome;
