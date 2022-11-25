import {Card} from 'shared/types/card.types';
import {tabIcons, TabNames} from '@components/tabBar/tabBar.data';

export enum CardKeys {
  League = 'league',
  Team = 'team',
}

export const cardsData: Card[] = [
  {
    keyValue: CardKeys.League,
    title: 'Leagues',
    iconName: tabIcons[TabNames.LeaguesAndTeams],
  },
];
