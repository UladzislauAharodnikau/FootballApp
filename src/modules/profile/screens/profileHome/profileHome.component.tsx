import React from 'react';
import {SafeAreaContainer} from '@components/safeAreaContainer';
import {ScreenContainer} from '@components/screenContainer';
import {Text, View} from 'react-native';
import {testProps} from 'shared/utils/testProps';

const ProfileHome = () => {
  return (
    <SafeAreaContainer>
      <ScreenContainer>
        <View {...testProps('wrapper-profile-module-id')}>
          <Text>ProfileModule</Text>
        </View>
      </ScreenContainer>
    </SafeAreaContainer>
  );
};

export default ProfileHome;
