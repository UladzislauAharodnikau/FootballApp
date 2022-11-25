import React, {memo} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {LeagueItem} from 'shared/types/leagueItem.types';

interface LeagueCardProps {
  league: LeagueItem;
  onLeagueCardPress(id: number, leagueName: string): void;
}

export const LeagueCard: React.FC<LeagueCardProps> = memo(
  ({league: {league}, onLeagueCardPress}) => {
    const onPress = () => {
      onLeagueCardPress(league.id, league.name);
    };

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.85}>
        <Image
          source={{uri: league.logo}}
          resizeMode="contain"
          style={styles.flagContainer}
        />
        <Text>{league.name}</Text>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  flagContainer: {
    width: 45,
    height: 65,
    marginRight: 20,
  },
});
