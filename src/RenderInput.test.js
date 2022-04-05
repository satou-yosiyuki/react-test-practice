import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
// import { userEvent } from "@testing-library";
import RenderInput from "./RenderInput";
import userEvent from "@testing-library/user-event";

// it間の副作用防止
afterEach(() => cleanup());

describe("Rendering", () => {
  it("SHould rendes all the elemnts correctly", () => {
    render(<RenderInput />);
    expect(screen.getAllByRole("button")).toBeTruthy();
    expect(screen.getAllByPlaceholderText("Enter")).toBeTruthy();
  });
});

describe("Input Form onChange event", () => {
  it("Shioult update input value correctly", () => {
    render(<RenderInput />);
    const inputValue = screen.getByPlaceholderText("Enter");
    // testと入力
    userEvent.type(inputValue, "test");
    expect(inputValue.value).toBe("test");
  });
});

describe("Console nutton conditionally triggered", () => {
  it("Should not trigger output function", () => {
    // ダミーの関数
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole} />);
    // ボタンをクリック
    userEvent.click(screen.getByRole("button"));
    // !inputなのでoutputConsoleは呼び出されない
    expect(outputConsole).not.toHaveBeenCalled();
  });
  it("Should trigger output function", () => {
    // propsを受け取るかのテスト
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole} />);
    const inputValue = screen.getByPlaceholderText("Enter");
    // testと入力
    userEvent.type(inputValue, "test");
    userEvent.click(screen.getByRole("button"));
    // 1回呼ばれる
    expect(outputConsole).toHaveBeenCalledTimes(1);
  });
});
