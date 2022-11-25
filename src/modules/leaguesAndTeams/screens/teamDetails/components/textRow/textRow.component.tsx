import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface TextRowProps {
  boldText: string;
  content?: string;
}

export const TextRow: React.FC<TextRowProps> = ({boldText, content}) => {
  return (
    <Text>
      <Text style={styles.bold}>{boldText} </Text>
      {content ?? ''}
    </Text>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
});
