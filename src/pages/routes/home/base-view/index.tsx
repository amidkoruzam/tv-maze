import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { TvShowSearch } from "src/features/search-tv-show/ui/search";
import { paths } from "src/shared/paths";
import { Container } from "src/shared/ui/container";
import { TvMazeLogo } from "src/shared/ui/tv-maze-logo";

import styles from "./styles.module.css";

type Props = {
  onSearch: (value: string) => void;
};

const Input = ({ onSearch }: Props) => {
  const [search, setSearch] = useState("");

  return (
    <TvShowSearch
      inputProps={{ autoFocus: true }}
      onSubmit={onSearch}
      onChange={setSearch}
      value={search}
    />
  );
};

export const BaseView = ({ onSearch }: Props) => {
  return (
    <Container className={styles.container}>
      <Link href={"/"}>
        <TvMazeLogo className={styles.logo} />
      </Link>

      <Input onSearch={onSearch} />
    </Container>
  );
};
