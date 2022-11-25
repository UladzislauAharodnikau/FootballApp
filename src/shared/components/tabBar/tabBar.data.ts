export enum TabNames {
  'LeaguesAndTeams' = 'LiguesAndTeams',
  'CoachesAndPlayers' = 'CoachesAndPlayers',
  'WishList' = 'WishList',
  'Transfers' = 'Transfers',
  'Profile' = 'Profile',
}

export const tabIcons: Record<string, string> = {
  [TabNames.LeaguesAndTeams]: 'icon_teams',
  [TabNames.CoachesAndPlayers]: 'player',
  [TabNames.WishList]: 'wishList',
  [TabNames.Transfers]: 'transfer',
  [TabNames.Profile]: 'profile',
};

export const tabLabels: Record<string, string> = {
  [TabNames.LeaguesAndTeams]: 'Leagues/Teams',
  [TabNames.CoachesAndPlayers]: 'Coaches/Players',
  [TabNames.WishList]: 'Wish List',
  [TabNames.Transfers]: 'Transfers',
  [TabNames.Profile]: 'Profile',
};
