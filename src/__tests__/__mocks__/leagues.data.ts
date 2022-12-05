import {LeagueItem} from 'shared/types/leagueItem.types';

export const mockedLeagues: LeagueItem[] = [
  {
    league: {id: 1, type: 'League', name: 'Test 1', logo: ''},
    country: {name: 'Test Country', code: '34', flag: ''},
    seasons: [
      {
        year: 2020,
        end: new Date('2022-22-02'),
        current: false,
        start: new Date('2022-22-02'),
      },
    ],
  },
  {
    league: {id: 2, type: 'League', name: 'Test 2', logo: ''},
    country: {name: 'Test Country 2', code: '35', flag: ''},
    seasons: [
      {
        year: 2022,
        end: new Date('2021-22-02'),
        current: false,
        start: new Date('2021-22-02'),
      },
    ],
  },
];

test.skip('skip', () => {});
