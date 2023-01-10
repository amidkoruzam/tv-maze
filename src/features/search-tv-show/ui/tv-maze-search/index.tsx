import Link from "next/link";
import { TvMazeLogo } from "src/shared/ui/tv-maze-logo";
import { TvShowSearch, TvShowSearchProps } from "../search";
import styles from "./styles.module.css";

export const TvMazeSearch = ({
  onChange,
  onSubmit,
  value,
  inputProps,
}: TvShowSearchProps) => {
  return (
    <div className={styles.header}>
      <Link href={"/"}>
        <TvMazeLogo className={styles.logo} />
      </Link>

      <TvShowSearch
        onChange={onChange}
        onSubmit={onSubmit}
        value={value}
        inputProps={inputProps}
      />
    </div>
  );
};
