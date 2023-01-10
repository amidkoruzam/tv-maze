import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../pages/index";

jest.mock("next/router", () => require("next-router-mock"));

describe("Home", () => {
  it("should search for tv shows", () => {
    render(<Home />);

    const input = screen.getByRole<HTMLInputElement>("textbox");
    fireEvent.change(input, { target: { value: "Friends" } });

    expect(input.value).toBe("Friends");
  });
});
