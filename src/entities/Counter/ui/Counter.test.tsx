import {fireEvent, screen} from "@testing-library/react";
import {Counter} from "./Counter";
import {componentRender} from "shared/config/test/componentRender/componentRender";

describe("Counter Tests", () => {
  test("with only first param", () => {
    componentRender(<Counter />, {initialState: {counter: {value: 10}}});
    expect(screen.getByTestId("counter")).toHaveTextContent("Value = 10");
  });

  test("increment", async () => {
    componentRender(<Counter />, {initialState: {counter: {value: 10}}});
    expect(screen.getByTestId("counter")).toHaveTextContent("Value = 10");
    const incrementBtn = screen.getByTestId("increment");
    fireEvent.click(incrementBtn); //incrementBtn.click();
    expect(await screen.findByTestId("counter")).toHaveTextContent("Value = 11");
  });

  test("decrement", async () => {
    componentRender(<Counter />, {initialState: {counter: {value: 10}}});
    expect(screen.getByTestId("counter")).toHaveTextContent("Value = 10");
    const decrementBtn = screen.getByTestId("decrement");
    fireEvent.click(decrementBtn); //decrementBtn.click();
    expect(await screen.findByTestId("counter")).toHaveTextContent("Value = 9");
  });
});
