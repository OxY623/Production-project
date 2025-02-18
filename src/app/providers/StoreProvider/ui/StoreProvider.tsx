import React from "react";
import {Provider} from "react-redux";
import {createReduxStore} from "../config/store";
import {StateSchema} from "../config/StateSchema";

type Props = {
  children?: React.ReactNode;
  initialState?: StateSchema;
};

const StoreProvider = ({children, initialState}: Props) => {
  const store = createReduxStore(initialState);
  return <Provider store={store}>{children}</Provider>;
};

export {StoreProvider};
