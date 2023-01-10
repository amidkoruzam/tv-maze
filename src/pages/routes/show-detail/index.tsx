import clsx from "clsx";
import { useRouter } from "next/router";
import { useState } from "react";
import { TvMazeSearch } from "src/features/search-tv-show";
import { TvShowDetail } from "src/shared/entities/tv-show";
import { paths } from "src/shared/paths";
import { Container } from "src/shared/ui/container";
import { PlaceholderImage } from "src/shared/ui/placeholder-image";
import { Rating } from "src/shared/ui/rating";
import { Back } from "./back";
import { Cast } from "./cast";

import styles from "./styles.module.css";

type Props = TvShowDetail & { redirectToHomeonBack: boolean };

const Search = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const onSearch = (query: string) => router.push(paths.home({ query }));

  return (
    <Container>
      <TvMazeSearch value={search} onChange={setSearch} onSubmit={onSearch} />
    </Container>
  );
};

export const ShowDetailPage = ({
  name,
  image,
  rating,
  genres,
  summary,
  cast,
  redirectToHomeonBack,
}: Props) => {
  return (
    <div className={styles.container}>
      <Search />

      <div className={styles.back}>
        <Back redirectToHomeonBack={redirectToHomeonBack} />
      </div>

      <Container>
        <div className={styles.detail}>
          <div className={styles.content}>
            <h1 className={styles.title}>{name}</h1>

            <div className={styles.rating}>
              <Rating starClassName={styles.star} value={rating.average} />
            </div>

            {genres.length > 0 && (
              <div className={styles.genres}>
                <b>Genres: </b>
                <span>{genres.join(" | ")}</span>
              </div>
            )}

            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: summary }}
            />
          </div>

          {image ? (
            <img className={styles.image} src={image?.medium} alt={name} />
          ) : (
            <PlaceholderImage className={styles.image} />
          )}

          {cast.length > 0 && (
            <div className={styles.cast}>
              <Cast items={cast} />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};
