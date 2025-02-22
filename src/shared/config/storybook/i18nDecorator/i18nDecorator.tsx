import React from "react";
import {I18nextProvider} from "react-i18next";
import i18n from "i18next";
import {Decorator} from "@storybook/react";
import path from "path";

const ruTranslation = path.resolve(__dirname, "../../locales/ru/translation.json");
const ruAbout = path.resolve(__dirname, "../../locales/ru/about.json");
const ruMain = path.resolve(__dirname, "../../locales/ru/main.json");
const ruNavbar = path.resolve(__dirname, "../../locales/ru/navbar.json");
const enTranslation = path.resolve(__dirname, "../../locales/en/translation.json");
const enAbout = path.resolve(__dirname, "../../locales/en/about.json");
const enMain = path.resolve(__dirname, "../../locales/en/main.json");
const enNavbar = path.resolve(__dirname, "../../locales/en/navbar.json");

i18n.init({
  lng: "ru", // или 'en'
  fallbackLng: "en",
  resources: {
    ru: {
      translation: [ruTranslation, ruAbout, ruMain, ruNavbar],
    },
    en: {
      translation: [enTranslation, enAbout, enMain, enNavbar],
    },
  },
  interpolation: {
    escapeValue: false, // не нужно для React
  },
});

const I18nDecorator: Decorator = (Story) => (
  <I18nextProvider i18n={i18n}>
    <Story />
  </I18nextProvider>
);

export {I18nDecorator};
