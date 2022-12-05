import {SeasonType} from 'shared/types/leagueItem.types';

test.skip('skip', () => {});

export const seasonList: SeasonType[] = [
  {
    year: 2022,
    end: new Date('2022-22-02'),
    current: false,
    start: new Date('2022-22-02'),
  },
  {
    year: 2023,
    end: new Date('2024-22-02'),
    current: true,
    start: new Date('2024-22-02'),
  },
  {
    year: 2024,
    end: new Date('2024-22-02'),
    current: false,
    start: new Date('2024-22-02'),
  },
  {
    year: 2025,
    end: new Date('2025-22-02'),
    current: false,
    start: new Date('2025-22-02'),
  },
];
