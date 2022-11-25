import React, {memo} from 'react';
import {TeamType} from 'shared/types/teamItem.types';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

interface TeamCardProps {
  team: TeamType;
  onTeamCardPress(): void;
}

export const TeamCard: React.FC<TeamCardProps> = memo(
  ({team, onTeamCardPress}) => {
    return (
      <Pressable style={styles.container} onPress={onTeamCardPress}>
        <Image
          source={{uri: team.logo}}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text>{team.name}</Text>
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  logo: {width: 40, height: 60, marginRight: 20},
});
