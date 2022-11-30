import {
  useGetLeagues,
  useGetTeams,
} from 'shared/core/hooks/leaguesAndTeams/index';

jest.mock('shared/core/hooks/leaguesAndTeams/index', () => ({
  useGetLeagues: jest.fn(),
  useGetTeams: jest.fn(),
}));

describe('leagues and teams useGetLeagues', () => {
  beforeEach(() => {
    useGetLeagues.mockImplementation(() => ({
      isLoading: false,
      isError: false,
      data: [{}, {}],
      error: null,
    }));
  });

  test('test returned params', () => {
    const {data, isError, isLoading, error} = useGetLeagues();

    expect(isLoading).toBe(false);
    expect(error).toBe(null);
    expect(isError).toBe(false);

    expect(data).toBeTruthy();
    expect(data.length).toBe(2);

    expect(useGetLeagues).toHaveBeenCalled();
  });
});

describe('leagues and teams useGetTeams', () => {
  beforeEach(() => {
    useGetTeams.mockImplementation(() => ({
      isLoading: true,
      isError: false,
      data: null,
      error: null,
    }));
  });

  test('test returned params useGetTeams', () => {
    const {data, isError, isLoading, error} = useGetTeams(1, 1);

    expect(isLoading).toBe(true);
    expect(error).toBe(null);
    expect(isError).toBe(false);

    expect(data).not.toBeTruthy();
    expect(data).toBe(null);

    expect(useGetTeams).toHaveBeenCalled();
  });
});
