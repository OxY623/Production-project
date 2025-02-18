import React from "react";
import {Provider} from "react-redux";
import {createReduxStore} from "../config/store";
import {StateSchema} from "../config/StateSchema";
import {DeepPartial} from "entities/Counter";

type Props = {
  children?: React.ReactNode;
  initialState?: DeepPartial<StateSchema>;
};

const StoreProvider = ({children, initialState}: Props) => {
  const store = createReduxStore(initialState as StateSchema);
  return <Provider store={store}>{children}</Provider>;
};

export {StoreProvider};
