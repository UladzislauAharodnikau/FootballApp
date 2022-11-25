import React from 'react';
import {SafeAreaView, Edge} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {Theme} from '@constants/theme';

interface SafeAreaContainerType {
  children: React.ReactNode;
  edges?: Edge[];
}

export const SafeAreaContainer: React.FC<SafeAreaContainerType> = ({
  children,
  edges,
}) => {
  return (
    <SafeAreaView
      edges={edges ?? ['right', 'left', 'top']}
      style={styles.container}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.white,
  },
});
