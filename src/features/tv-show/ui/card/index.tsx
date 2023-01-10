import clsx from "clsx";
import Link from "next/link";
import { paths } from "src/shared/paths";
import { PlaceholderImage } from "src/shared/ui/placeholder-image";
import { Rating } from "src/shared/ui/rating";

import styles from "./styles.module.css";

type Props = {
  id: number;
  name: string;
  rating: number;
  image?: string;
};

export const TvShowCard = ({ name, id, rating, image }: Props) => {
  return (
    <div>
      <Link href={paths.tvShow(id)}>
        {image ? (
          <img
            className={styles.image}
            width={217}
            height={305}
            src={image}
            alt={name}
          />
        ) : (
          <PlaceholderImage className={styles.image} />
        )}
      </Link>

      <Link href={paths.tvShow(id)}>
        <h5 className={styles.title}>{name}</h5>
      </Link>

      <Rating starClassName={styles.star} value={rating} />
    </div>
  );
};
