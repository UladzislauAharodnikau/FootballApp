import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {useGetLeagues, useGetTeams} from 'shared/core/hooks/leaguesAndTeams';
import LeaguesDetails from 'modules/leaguesAndTeams/screens/leaguesList/leaguesList.component';
import {Theme} from '@constants/theme';
import {mockedLeagues} from '__tests__/__mocks__/leagues.data';
import {LeagueCardList} from 'modules/leaguesAndTeams/screens/leaguesList/components/leagueCardList/leagueCardList.component';
import {LeagueCard} from 'modules/leaguesAndTeams/screens/leaguesList/components/leagueCard/leagueCard.component';
import {SeasonList} from 'modules/leaguesAndTeams/screens/leagueDetails/components/seasonList/seasonList.component';
import {seasonList} from '__tests__/__mocks__/season.data';
import {SeasonCard} from 'modules/leaguesAndTeams/screens/leagueDetails/components/seasonCard/seasonCard.component';
import TeamList from 'modules/leaguesAndTeams/screens/teamList/teamList.component';
import {teamsMockedData} from '__tests__/__mocks__/teams.data';
import {TeamCard} from 'modules/leaguesAndTeams/screens/teamList/components/teamCard/teamCard.component';

type GetLeaguesParamsType = {
  isLoading?: boolean;
  isError?: boolean;
  data?: any;
  error?: any;
};

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

describe('leagueList component test', () => {
  const getLeaguesCallback = ({
    isLoading = false,
    isError = false,
    data = [],
    error = null,
  }: GetLeaguesParamsType) =>
    useGetLeagues.mockImplementation(() => ({
      isLoading,
      isError,
      data,
      error,
    }));

  test('should be ActivityIndicator render when isLoading in true state, create snapshot', async () => {
    getLeaguesCallback({isLoading: true});

    const renderComponent = render(<LeaguesDetails />);

    const tree = renderComponent.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('snapshot when list is empty', async () => {
    getLeaguesCallback({});

    const renderComponent = render(<LeaguesDetails />);

    const tree = renderComponent.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('snapshot when list has items', async () => {
    getLeaguesCallback({data: mockedLeagues});

    const renderComponent = render(<LeaguesDetails />);

    const tree = renderComponent.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('should be available ActivityIndicator when isLoading state true', () => {
    getLeaguesCallback({isLoading: true});

    const renderComponent = render(<LeaguesDetails />);

    const activityIndicatorComponent =
      renderComponent.getByTestId('activity-indicator');

    expect(activityIndicatorComponent).toBeTruthy();

    expect(activityIndicatorComponent.props.size).toBe(20);
    expect(activityIndicatorComponent.props.color).toBe(Theme.purple);
  });

  test('list of leagues snapshot', () => {});

  test('should render correct data into list of leagues', () => {
    const renderComponent = render(<LeagueCardList data={mockedLeagues} />);

    const leaguesList = renderComponent.getByTestId('leagues-list-id');

    expect(leaguesList).toBeTruthy();
    expect(leaguesList.props.data).toEqual(mockedLeagues);
  });
});

describe('League card component test', () => {
  let onPress: any, touchableItem: any;

  beforeEach(() => {
    onPress = jest.fn();

    const renderComponent = render(
      <LeagueCard league={mockedLeagues[0]} onLeagueCardPress={onPress} />,
    );

    touchableItem = renderComponent.getByTestId('card-league-press-id');
  });

  test('on press event callback should be pressed', () => {
    fireEvent.press(touchableItem);

    expect(onPress).toHaveBeenCalledTimes(1);

    fireEvent.press(touchableItem);

    expect(onPress).toHaveBeenCalledTimes(2);
  });

  test('should be called with valid ids which should be taken from item', () => {
    fireEvent.press(touchableItem);

    expect(onPress).toHaveBeenCalledWith(
      mockedLeagues[0].league.id,
      mockedLeagues[0].league.name,
    );
  });
});

// season list tests

describe('season list test', () => {
  test('season list snapshot with data', () => {
    const tree = render(
      <SeasonList data={seasonList} leagueName="League 1" leagueId={25} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('season list snapshot with empty data', () => {
    const tree = render(
      <SeasonList data={[]} leagueName="League 1" leagueId={25} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('list item should have 4 items', () => {
    const tree = render(
      <SeasonList data={seasonList} leagueName="League 1" leagueId={25} />,
    );

    const component = tree.getByTestId('season-list-id');

    expect(component).toBeTruthy();

    expect(component.props.data.length).toBe(4);
  });

  test('season list card callback should call once', () => {
    const onSeasonCardPress = jest.fn();

    const cardComponent = render(
      <SeasonCard
        season={seasonList[0]}
        onSeasonCardPress={onSeasonCardPress}
      />,
    );

    const seasonCardTouchableItem = cardComponent.getByTestId(
      'season-card-press-id',
    );

    expect(seasonCardTouchableItem).toBeTruthy();

    fireEvent.press(seasonCardTouchableItem);

    expect(onSeasonCardPress).toHaveBeenCalledTimes(1);

    fireEvent.press(seasonCardTouchableItem);
    fireEvent.press(seasonCardTouchableItem);

    expect(onSeasonCardPress).toHaveBeenCalledTimes(3);

    //should be called without any params
    expect(onSeasonCardPress).toHaveBeenCalledWith();
  });
});

describe('team list', () => {
  const getTeamsCallback = ({
    isLoading = false,
    isError = false,
    data = [],
    error = null,
  }: GetLeaguesParamsType) =>
    useGetTeams.mockImplementation(() => ({
      isLoading,
      isError,
      data,
      error,
    }));

  test('should be available only activityIndicator component with isLoading true state', () => {
    getTeamsCallback({isLoading: true});

    const indicator = render(<TeamList />).getByTestId('activity-indicator');

    expect(indicator).toBeTruthy();

    expect(indicator.props.size).toBe(20);
    expect(indicator.props.color).toBe(Theme.purple);
  });

  test('team list snapshot when isLoading state in true', () => {
    getTeamsCallback({isLoading: true});

    const tree = render(<TeamList />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('team list snapshot when data is empty', () => {
    getTeamsCallback({});

    const tree = render(<TeamList />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('team list snapshot with data', () => {
    getTeamsCallback({data: teamsMockedData});

    const tree = render(<TeamList />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('team list should include 2 items', () => {
    getTeamsCallback({data: teamsMockedData});

    const component = render(<TeamList />).getByTestId('team-list-id');

    expect(component).toBeTruthy();

    expect(component.props.data.length).toBe(2);
  });

  test('team card should  be pressed and existed, and also called without params', () => {
    const onTeamCardPress = jest.fn();

    const teamCard = render(
      <TeamCard
        team={teamsMockedData[0].team}
        onTeamCardPress={onTeamCardPress}
      />,
    );

    const pressItem = teamCard.getByTestId('team-card-press-id');

    expect(pressItem).toBeTruthy();

    fireEvent.press(pressItem);

    expect(onTeamCardPress).toHaveBeenCalledTimes(1);
    expect(onTeamCardPress).toHaveBeenCalledWith();
  });
});
