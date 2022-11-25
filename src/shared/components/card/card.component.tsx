import React, {memo} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Icon} from '@components/icon';
import {Theme} from '@constants/theme';
import {defaultHitSlop} from '@constants/common';

interface CardProps {
  keyValue: string;
  title: string;
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  onPress(type: string): void;
}

export const Card: React.FC<CardProps> = memo(
  ({
    keyValue,
    title,
    iconName,
    iconSize = 20,
    iconColor = Theme.dark,
    onPress,
  }) => {
    const onCardPress = () => {
      onPress(keyValue);
    };

    return (
      <TouchableOpacity
        activeOpacity={0.85}
        style={styles.cardContainer}
        onPress={onCardPress}
        hitSlop={defaultHitSlop}>
        <Icon name={iconName} size={iconSize} color={iconColor} />
        <Text style={styles.content}>{title}</Text>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  cardContainer: {
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 40,
    borderWidth: 1,
    borderColor: Theme.dark,
    borderRadius: 20,
  },
  content: {
    marginBottom: 10,
  },
});
