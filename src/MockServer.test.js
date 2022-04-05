import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MockServer from "./MockServer";

import { rest } from "msw";
import { setupServer } from "msw/node";

// 擬似的なサーバー
const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/users/1", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ username: "Bret dummy" }));
  })
);
// モックサーバーを起動
beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

// エラーになる書き方
// expect(await screen.findByRole("heading")).toHaveTextContent("Bred dummy");

describe("Mocking API", () => {
  it("[Fetch success]Should display fetched data correctly and button disable", async () => {
    render(<MockServer />);
    userEvent.click(screen.getByRole("button"));
    expect(await screen.findByText("Bret dummy")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveAttribute("disabled");
  });
  it("[Fetch success]Should display error msg, no render heading and button abled", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users/1",
        (req, res, ctx) => {
          return res(ctx.status(404));
        }
      )
    );
    render(<MockServer />);
    userEvent.click(screen.getByRole("button"));
    expect(await screen.findByTestId("error")).toHaveTextContent(
      "Fetcing Failed !"
    );
    expect(screen.queryByRole("heading")).toBeNull();
    expect(screen.getByRole("button")).not.toHaveAttribute("disabled");
  });
});
