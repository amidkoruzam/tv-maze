import { useRouter } from "next/router";
import { HomePage } from "src/pages/routes/home";
import { SEO } from "src/shared/ui/seo";

export default function Home() {
  const { query } = useRouter();
  let searchedQuery = "";

  if (Array.isArray(query.search)) {
    searchedQuery = query.search[0];
  } else if (typeof query.search === "string") {
    searchedQuery = query.search;
  }

  return (
    <>
      <SEO title={"TV Maze"} />
      <HomePage searchedQuery={searchedQuery} />
    </>
  );
}
