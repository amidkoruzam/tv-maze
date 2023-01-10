import { GetServerSidePropsContext } from "next";

import { showsAPI } from "src/shared/api/shows";
import { TvShowDetail } from "src/shared/entities/tv-show";
import { ShowDetailPage } from "src/pages/routes/show-detail";
import { SEO } from "src/shared/ui/seo";

export default function ShowDetail({
  id,
  genres,
  name,
  cast,
  rating,
  summary,
  image,
  redirectToHomeonBack,
}: TvShowDetail & { redirectToHomeonBack: boolean }) {
  return (
    <>
      <SEO title={`TV Maze | ${name}`} />
      <ShowDetailPage
        id={id}
        name={name}
        cast={cast}
        genres={genres}
        summary={summary}
        image={image}
        rating={rating}
        redirectToHomeonBack={redirectToHomeonBack}
      />
    </>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params?.id;

  if (typeof id !== "string") {
    return;
  }

  const { genres, name, cast, rating, summary, image, ...show } =
    await showsAPI.getById(Number(id));

  const redirectToHomeonBack = !context.req.headers.referer;

  return {
    props: {
      id: show.id,
      genres,
      name,
      cast,
      rating,
      summary,
      image,
      redirectToHomeonBack,
    },
  };
};
