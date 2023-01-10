import { rest } from "msw";

const show = {
  rating: 8,
  genres: ["Genre #1"],
  id: 1,
  image: { medium: "/image.png" },
  name: "Show #1",
  summary: "<p>summary</p>",
};

export const handlers = [
  rest.get("https://api.tvmaze.com/search/shows", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          show,
        },
      ])
    );
  }),

  rest.get("https://api.tvmaze.com/shows/8", (req, res, ctx) => {
    return res(
      ctx.json({
        ...show,
        _embedded: {
          cast: [
            {
              character: {
                name: "Character #1",
                id: 1,
                image: { medium: "/character.png" },
              },
              person: { name: "Person #1", image: { medium: "/person.png" } },
            },
          ],
        },
      })
    );
  }),
];
