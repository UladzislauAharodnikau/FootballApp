import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {Theme} from '@constants/theme';

interface ScreenContainerType {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
}

export const ScreenContainer: React.FC<ScreenContainerType> = ({
  children,
  style,
}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: Theme.white,
  },
});
