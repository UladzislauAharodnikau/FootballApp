import {TeamItem} from 'shared/types/teamItem.types';

test.skip('skip', () => {});

export const teamsMockedData: TeamItem[] = [
  {
    team: {
      name: 'Liverpool',
      id: 1,
      code: '22',
      country: 'England',
      logo: '',
      founded: 1900,
      national: false,
    },
    venue: {
      name: 'Venue Test 1',
      id: 1,
      address: 'Test address 1',
      image: '',
      capacity: 44,
      city: 'Test city',
      surface: 'Test surface',
    },
  },
  {
    team: {
      name: 'Arsenal',
      id: 2,
      code: '22',
      country: 'England',
      logo: '',
      founded: 1900,
      national: false,
    },
    venue: {
      name: 'Venue Test 2',
      id: 2,
      address: 'Test address 2',
      image: '',
      capacity: 43,
      city: 'Test city',
      surface: 'Test surface',
    },
  },
];
