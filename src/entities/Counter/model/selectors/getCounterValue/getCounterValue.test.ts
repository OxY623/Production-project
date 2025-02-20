import {User, UserSchema} from "entities/User";
import {CounterSchema} from "../../types/counterSchema";
import {getCounterValue} from "./getCounterValue";

describe("getCounterValue", () => {
  it("should return counter value", () => {
    const state = {
      counter: {
        value: 10,
      },
      user: {
        authData: {
          id: "1",
          username: "admin",
        },
      },
    };
    const counterValue = getCounterValue(state as {counter: CounterSchema; user: UserSchema});
    expect(counterValue).toBe(10);
  });
});
