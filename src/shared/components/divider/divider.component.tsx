import React, {memo} from 'react';
import {View} from 'react-native';
import {Theme} from '@constants/theme';

interface DividerProps {
  size?: number;
  color?: string;
  opacity?: number;
}

export const Divider: React.FC<DividerProps> = memo(
  ({size = 1, color = Theme.gray, opacity = 1}) => {
    return (
      <View
        style={{width: '100%', height: size, backgroundColor: color, opacity}}
      />
    );
  },
);
