import { useRouter } from "next/router";
import { paths } from "src/shared/paths";
import { BaseView } from "./base-view";
import { ListView } from "./list-view";

type Props = {
  searchedQuery: string;
};

export const HomePage = ({ searchedQuery }: Props) => {
  const router = useRouter();

  const onSearch = async (query: string) => {
    if (query === "") return;
    router.push(paths.home({ query }));
  };

  if (searchedQuery === "") return <BaseView onSearch={onSearch} />;
  return <ListView searchedQuery={searchedQuery} onSearch={onSearch} />;
};
