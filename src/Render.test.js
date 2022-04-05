import React from "react";
import { render, screen } from "@testing-library/react";
import Render from "./Render";

describe("Rendering", () => {
  it("Should render all the elements correctly", () => {
    render(<Render />);
    // renderした値を表示
    // screen.debug();
    screen.debug(screen.getByRole("heading"));
    expect(screen.getByRole("heading")).toBeTruthy();
  });
});
