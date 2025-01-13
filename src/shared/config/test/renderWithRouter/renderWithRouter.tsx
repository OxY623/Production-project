import React from "react";
import {render} from "@testing-library/react";
import i18n from "shared/config/i18n/i18nForTests";
import {I18nextProvider} from "react-i18next";
import {MemoryRouter} from "react-router-dom";

export interface renderWitRouterOptions {
  route: string;
}

const renderWitRouter = (component: React.ReactNode, options: renderWitRouterOptions) => {
  const {route = "/"} = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
    </MemoryRouter>,
  );
};

export {renderWitRouter};
