import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../pages/index";
import { server } from "../mocks/server";
import ShowDetail from "pages/shows/[id]";
import { showsAPI } from "src/shared/api/shows";

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("next/dist/client/router", () => require("next-router-mock"));

beforeAll(() => server.listen());

describe("Home", () => {
  it("should search for tv shows", async () => {
    render(<Home />);

    const input = screen.getByRole<HTMLInputElement>("textbox");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "Friends" } });
    fireEvent.click(button);

    const title = await screen.findByText("Show #1");
    const image = await screen.findByAltText("Show #1");

    expect(input.value).toBe("Friends");
    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  it("should render tv show detail", async () => {
    const data = await showsAPI.getById(Number(8));

    render(<ShowDetail {...data} redirectToHomeonBack={true} />);

    const genres = await screen.findByText("Genres:");
    const character = await screen.findByText("as Character #1");
    const person = await screen.findByText("Person #1");

    expect(genres).toBeInTheDocument();
    expect(character).toBeInTheDocument();
    expect(person).toBeInTheDocument();
  });
});
