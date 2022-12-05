import '@testing-library/jest-dom';

// eslint-disable-next-line no-undef
jest.mock('axios');

// eslint-disable-next-line no-undef
jest.mock('axios');
// eslint-disable-next-line no-undef
jest.mock('@react-navigation/native', () => ({
  // eslint-disable-next-line no-undef
  useNavigation: jest.fn(() => ({
    // eslint-disable-next-line no-undef
    navigate: jest.fn(),
  })),
  // eslint-disable-next-line no-undef
  useRoute: jest.fn(() => ({
    params: {},
  })),
}));

// eslint-disable-next-line no-undef
jest.mock('shared/core/hooks/leaguesAndTeams', () => ({
  // eslint-disable-next-line no-undef
  useGetLeagues: jest.fn(),
  // eslint-disable-next-line no-undef
  useGetTeams: jest.fn(),
}));
