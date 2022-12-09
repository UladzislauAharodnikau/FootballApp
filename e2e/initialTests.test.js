import {device, element, by} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {});

  it('list of leagues should be first opened after init app', async () => {
    const leagueListContainerView = await element(
      by.id('cards-leagues-list-id'),
    );

    await expect(leagueListContainerView).toBeVisible();
  });

  it('card element on leagues and teams home screen should be tapable', async () => {
    const leagueTapableElement = await element(by.id('league'));

    //should be visible because of on main page
    await expect(leagueTapableElement).toBeVisible();

    await leagueTapableElement.tap();

    //after tapping by card should be available list of leagues
    const leaguesList = await element(by.id('leagues-list-id'));

    await expect(leaguesList).toBeVisible();
  });
});
