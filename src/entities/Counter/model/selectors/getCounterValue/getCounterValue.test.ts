import {User, UserSchema} from "entities/User";
import {CounterSchema} from "../../types/counterSchema";
import {getCounterValue} from "./getCounterValue";
import {LoginSchema} from "features/AuthByUserName";
import {log} from "console";

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
      loginForm: {
        username: "",
        password: "",
        error: undefined,
        isLoading: false,
      },
    };
    const counterValue = getCounterValue(
      state as {counter: CounterSchema; user: UserSchema; loginForm: LoginSchema},
    );
    expect(counterValue).toBe(10);
  });
});
