import React from "react";
import {render} from "@testing-library/react";
import i18n from "shared/config/i18n/i18nForTests";
import {I18nextProvider} from "react-i18next";
import {MemoryRouter} from "react-router-dom";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import {DeepPartial} from "entities/Counter";
export interface ComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

const componentRender = (component: React.ReactNode, options: ComponentRenderOptions = {}) => {
  const {route = "/", initialState} = options;

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
};

export {componentRender};
