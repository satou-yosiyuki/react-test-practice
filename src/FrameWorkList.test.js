import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import FrameWorkList from "./FrameWorkList";

afterEach(() => cleanup());

describe("Rendering the list with props", () => {
  it("Should render No data ! when no data propped", () => {
    // propsを渡さなかった時
    render(<FrameWorkList />);
    // toBeInTheDocument→HTML
    expect(screen.getByText("No Data")).toBeInTheDocument();
  });
  it("Should render list item correctly", () => {
    const dummyData = [
      { id: 1, item: "dummyReact" },
      { id: 2, item: "dummyVue" },
      { id: 3, item: "dummyAngular" },
    ];
    render(<FrameWorkList frameworks={dummyData} />);
    const frameworkItems = screen
      .getAllByRole("listitem")
      .map((ele) => ele.textContent);
    const dummyItems = dummyData.map((ele) => ele.item);
    expect(frameworkItems).toEqual(dummyItems);
    // 無い時のテスト
    expect(screen.queryByText("No Data")).toBeNull();
  });
});
