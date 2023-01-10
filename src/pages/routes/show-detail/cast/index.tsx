import clsx from "clsx";
import { TvShowDetail } from "src/shared/entities/tv-show";
import { PlaceholderImage } from "src/shared/ui/placeholder-image";

import styles from "./styles.module.css";

type Props = {
  items: TvShowDetail["cast"];
};

export const Cast = ({ items }: Props) => {
  return (
    <div>
      <b className={styles.title}>Cast</b>

      <div className={styles.items}>
        {items.map(({ character, person }, index) => {
          const image = character?.image?.medium ?? person?.image?.medium;

          return (
            <div className={styles.member} key={index}>
              {image ? (
                <img
                  className={styles.image}
                  src={image}
                  alt={character.name}
                />
              ) : (
                <PlaceholderImage
                  className={clsx(styles.placeholder, styles.image)}
                />
              )}
              <div className={styles.wrapper}>
                <b className={styles.person}>{person.name}</b>
                <span className={styles.character}>as {character.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
