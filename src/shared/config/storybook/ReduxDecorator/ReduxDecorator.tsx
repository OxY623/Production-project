import React from "react";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import {DeepPartial} from "entities/Counter";
import {Decorator} from "@storybook/react";

export const ReduxDecorator: Decorator = (Story) => {
  const initialState: DeepPartial<StateSchema> = {
    counter: {value: 10},
    user: {authData: {id: "1", username: "admin"}},
  };

  return (
    <StoreProvider initialState={initialState}>
      <Story />
    </StoreProvider>
  );
};
