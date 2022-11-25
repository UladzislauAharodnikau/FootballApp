import React, {FC, memo} from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import config from 'assets/fonts/icomoon/selection.json';
import {IconProps} from 'react-native-vector-icons/Icon';
import {Pressable} from 'react-native';
import {defaultHitSlop} from '@constants/common';

const IconComponent = createIconSetFromIcoMoon(
  config,
  'icomoon',
  'icomoon.ttf',
);

export const Icon: FC<IconProps> = memo(({onPress, ...props}) => {
  return (
    <Pressable onPress={onPress} hitSlop={defaultHitSlop}>
      <IconComponent {...props} onPress={onPress} />
    </Pressable>
  );
});
