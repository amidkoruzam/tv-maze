export type TvShow = {
  id: number;
  rating: { average: number };
  genres: string[];
  image?: {
    medium: string;
    original: string;
  };
  name: string;
  summary: string;
};

export type TvShowDetail = TvShow & {
  cast: TvShowCastMember[];
};

export type TvShowCastMember = {
  person: { name: string; image: { medium: string; original: string } };
  character: {
    id: number;
    name: string;
    image: { medium: string; original: string };
  };
};
