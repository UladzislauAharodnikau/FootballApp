export type StatisticsType = {
  team: TeamType;
  fixtures: FixturesType;
};

export type TeamType = {
  id: number;
  name: string;
  logo: string;
};

export type FixturesType = {
  played: MatchCountType;
  wins: MatchCountType;
  draws: MatchCountType;
  loses: MatchCountType;
};

type MatchCountType = {
  home: number;
  away: number;
  total: number;
};
