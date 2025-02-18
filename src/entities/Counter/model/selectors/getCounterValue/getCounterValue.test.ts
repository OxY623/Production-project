import {CounterSchema} from "../../types/counterSchema";
import {getCounterValue} from "./getCounterValue";

describe("getCounterValue", () => {
  it("should return counter value", () => {
    const state = {
      counter: {
        value: 10,
      },
    };
    const counterValue = getCounterValue(state as {counter: CounterSchema});
    expect(counterValue).toBe(10);
  });
});
