import {device, element, by} from 'detox';
import {TabRoutes} from 'root.types';
import {CardKeys} from 'modules/leaguesAndTeams/screens/leaguesAndTeamsHome/leaguesAndTeamsHome.data';

describe('tabs tests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  test('all tabs have to be visible after starting the app', async () => {
    const tabLeaguesAndTeams = await element(by.id(TabRoutes.LiguesAndTeams));
    const tabCoachesAndPlayers = await element(
      by.id(TabRoutes.CoachesAndPlayers),
    );
    const tabWishList = await element(by.id(TabRoutes.WishList));
    const tabProfile = await element(by.id(TabRoutes.Profile));
    const tabTransfers = await element(by.id(TabRoutes.Transfers));

    await expect(tabLeaguesAndTeams).toBeVisible();
    await expect(tabCoachesAndPlayers).toBeVisible();
    await expect(tabWishList).toBeVisible();
    await expect(tabProfile).toBeVisible();
    await expect(tabTransfers).toBeVisible();
  });

  test('since initialize of the app should be selected leagues and teams tab', async () => {
    const leaguesList = await element(by.id('cards-leagues-list-id'));

    await expect(leaguesList).toBeVisible();
  });

  test('should be move on to coaches and players module correctly', async () => {
    const tabCoachesAndPlayers = await element(
      by.id(TabRoutes.CoachesAndPlayers),
    );

    await tabCoachesAndPlayers.tap();

    const wrapperCoachesAndPlayersView = await element(
      by.id('wrapper-coaches-players-id'),
    );

    await expect(wrapperCoachesAndPlayersView).toBeVisible();
  });

  test('should be move on to wish list module correctly', async () => {
    const tabWishList = await element(by.id(TabRoutes.WishList));

    await tabWishList.tap();

    const wrapperWishListView = await element(by.id('wrapper-wish-list-id'));

    await expect(wrapperWishListView).toBeVisible();
  });

  test('should be move on to transfers module correctly', async () => {
    const tabTransfers = await element(by.id(TabRoutes.Transfers));

    await tabTransfers.tap();

    const wrapperTransfersView = await element(
      by.id('wrapper-transfers-module-id'),
    );

    await expect(wrapperTransfersView).toBeVisible();
  });

  test('should be move on to profile module correctly', async () => {
    const tabProfile = await element(by.id(TabRoutes.Profile));

    await tabProfile.tap();

    const wrapperProfileView = await element(
      by.id('wrapper-profile-module-id'),
    );

    await expect(wrapperProfileView).toBeVisible();
  });

  test('should return to  leagues and teams home page after tapping on a tab when deep in the stack', async () => {
    const tabLeaguesAndTeams = await element(by.id(TabRoutes.LiguesAndTeams));

    await tabLeaguesAndTeams.tap();

    const leaguesCard = await element(by.id(CardKeys.League));

    // go dipper into module
    await leaguesCard.tap();

    const leaguesList = element(by.id('leagues-list-id'));

    await expect(leaguesList).toBeVisible();

    await tabLeaguesAndTeams.tap();

    await expect(leaguesCard).toBeVisible();
  });
});
