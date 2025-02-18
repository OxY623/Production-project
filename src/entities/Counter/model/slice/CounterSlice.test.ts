import {CounterSchema} from "../types/counterSchema";
import {counterActions, counterReducer} from "./CounterSlice";

describe("counterSlice", () => {
  test("increment", () => {
    const state: CounterSchema = {value: 10};
    const newState = counterReducer(state, counterActions.increment());
    expect(newState.value).toBe(11);
  });

  test("decrement", () => {
    const state: CounterSchema = {value: 10};
    const newState = counterReducer(state, counterActions.decrement());
    expect(newState.value).toBe(9);
  });

  test("should work with state empty", () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({value: 1});
  });
});
