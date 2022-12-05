import React, {memo} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {SeasonType} from 'shared/types/leagueItem.types';
import {testProps} from 'shared/utils/testProps';

interface SeasonCardProps {
  season: SeasonType;
  onSeasonCardPress(): void;
}

export const SeasonCard: React.FC<SeasonCardProps> = memo(
  ({season, onSeasonCardPress}) => {
    return (
      <Pressable
        {...testProps('season-card-press-id')}
        onPress={onSeasonCardPress}
        style={styles.container}>
        <Text>{season?.year}</Text>
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
