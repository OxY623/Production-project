import React from "react";
import {render} from "@testing-library/react";
import i18n from "shared/config/i18n/i18nForTests";
import {I18nextProvider} from "react-i18next";

const renderWithTranslation = (component: React.ReactNode) => {
  return render(<I18nextProvider i18n={i18n}>{component}</I18nextProvider>);
};

export {renderWithTranslation};
