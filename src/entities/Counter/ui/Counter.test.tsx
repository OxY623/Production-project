import {screen} from "@testing-library/react";
import {Counter} from "./Counter";
import {componentRender} from "shared/config/test/componentRender/componentRender";

describe("Counter Tests", () => {
  test("with only first param", () => {
    componentRender(<Counter />, {initialState: {counter: {value: 10}}});
    expect(screen.getByTestId("counter")).toHaveTextContent("Value = 10");
  });

  test("increment", () => {
    componentRender(<Counter />, {initialState: {counter: {value: 10}}});
    expect(screen.getByTestId("counter")).toHaveTextContent("Value = 10");
    const incrementBtn = screen.getByTestId("increment");
    incrementBtn.click();
    expect(screen.getByTestId("counter")).toHaveTextContent("Value = 11");
  });

  test("decrement", () => {
    componentRender(<Counter />, {initialState: {counter: {value: 10}}});
    expect(screen.getByTestId("counter")).toHaveTextContent("Value = 10");
    const decrementBtn = screen.getByTestId("decrement");
    decrementBtn.click();
    expect(screen.getByTestId("counter")).toHaveTextContent("Value = 9");
  });
});
