import {StateSchema} from "app/providers/StoreProvider";
import {getCounter} from "./getCounter";

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

describe("getCounter", () => {
  test("should return counter value", () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };

    expect(getCounter(state as StateSchema)).toEqual({value: 10});
  });
});
