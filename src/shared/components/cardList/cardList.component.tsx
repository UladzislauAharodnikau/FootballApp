import React, {memo} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {Card} from '@components/card';
import {Card as CardType} from 'shared/types/card.types';

interface CardListProps {
  data: CardType[];
  onPress(type: string): void;
}

export const CardList: React.FC<CardListProps> = memo(({data, onPress}) => {
  const renderItem = ({item}: ListRenderItemInfo<CardType>) => {
    return <Card {...item} onPress={onPress} />;
  };

  return (
    <FlatList
      data={data}
      keyExtractor={({keyValue}) => keyValue}
      renderItem={renderItem}
      horizontal
      style={{}}
    />
  );
});
