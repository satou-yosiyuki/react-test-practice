
import { render, screen, cleanup } from "@testing-library/react";
import UseEffectRender from "./UseEffectRender";

describe("useEffect rendering", () => {
  it("Should render only after async function resoleved", async () => {
    render(<UseEffectRender />);
    // /と/の間にかく（正規化）よってテキストが含まれているかどうか
    expect(screen.queryByText(/I am/)).toBeNull();
    // findByTextは非同期処理を待ってくれる
    expect(await screen.findByText(/I am/)).toBeInTheDocument();
  });
});
