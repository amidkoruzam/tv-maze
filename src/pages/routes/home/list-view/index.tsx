import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { TvMazeSearch, useShowSearch } from "src/features/search-tv-show";
import { TvShowCard } from "src/features/tv-show";
import { TvShow } from "src/shared/entities/tv-show";
import { paths } from "src/shared/paths";
import { Container } from "src/shared/ui/container";

import styles from "./styles.module.css";

type Props = {
  searchedQuery: string;
  onSearch: (value: string) => void;
};

const Search = ({ searchedQuery, onSearch }: Props) => {
  const [search, setSearch] = useState(searchedQuery);

  return (
    <TvMazeSearch onChange={setSearch} value={search} onSubmit={onSearch} />
  );
};

export const ListView = ({ searchedQuery, onSearch }: Props) => {
  const [shows, setShows] = useState<TvShow[]>([]);
  const { search } = useShowSearch(); // TODO: make skeleton

  useEffect(() => {
    search(searchedQuery).then(setShows);
  }, [searchedQuery]);

  return (
    <Container className={styles.container}>
      <Search searchedQuery={searchedQuery} onSearch={onSearch} />

      <div className={styles.shows}>
        {shows.map(({ id, image, name, rating }) => (
          <TvShowCard
            key={id}
            id={id}
            image={image?.medium}
            name={name}
            rating={rating.average}
          />
        ))}
      </div>
    </Container>
  );
};
