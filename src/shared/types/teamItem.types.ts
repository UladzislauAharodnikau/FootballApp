export type TeamItem = {
  team: TeamType;
  venue: VenueType;
};

export type TeamType = {
  id: number;
  name: string;
  code: string;
  country: string;
  founded: number;
  national: boolean;
  logo: string;
};

export type VenueType = {
  id: number;
  name: string;
  address: string;
  city: string;
  capacity: number;
  surface: string;
  image: string;
};
