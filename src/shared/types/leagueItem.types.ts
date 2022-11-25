export type LeagueItem = {
  league: LeagueType;
  country: CountryType;
  seasons: SeasonType[];
};

type LeagueType = {
  id: number;
  name: string;
  type: 'League';
  logo: string;
};

export type CountryType = {
  name: string;
  code: string;
  flag: string;
};

export type SeasonType = {
  year: number;
  start: Date;
  end: Date;
  current: boolean;
};
