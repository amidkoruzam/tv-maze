import { TvShow, TvShowCastMember, TvShowDetail } from "../entities/tv-show";

type GetResult = {
  show: TvShow;
};

type GetDetailResult = TvShow & {
  _embedded: { cast: TvShowCastMember[] };
};

const mapSearchResultToTvShow = ({
  show: { rating, genres, id, image, name, summary },
}: GetResult): TvShow => ({
  rating,
  genres,
  id,
  image,
  name,
  summary,
});

const mapDetailResultToShowDetail = ({
  id,
  rating,
  _embedded,
  genres,
  name,
  summary,
  image,
}: GetDetailResult): TvShowDetail => ({
  id,
  genres,
  rating,
  cast: _embedded.cast.map(({ character, person }) => ({
    character: {
      name: character.name,
      id: character.id,
      image: character.image,
    },
    person: { name: person.name, image: person.image },
  })),
  name,
  summary,
  image,
});

const search = ({ query }: { query: string }): Promise<TvShow[]> =>
  fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    .then<GetResult[]>((res) => res.json())
    .then((res) => res.map(mapSearchResultToTvShow));

const getById = (id: number) =>
  fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`)
    .then<GetDetailResult>((res) => res.json())
    .then(mapDetailResultToShowDetail);

export const showsAPI = {
  search,
  getById,
};
