import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // связываем react-i18next с экземпляром i18n
  .init({
    lng: "ru", // начальный язык
    fallbackLng: "en", // резервный язык
    debug: __IS_DEV__, // включаем дебаг в разработке

    interpolation: {
      escapeValue: false, // не нужно для React
    },

    backend: {
      loadPath: "locales/{{lng}}/{{ns}}.json", // путь к файлам локалей
    },

    // настройки для React (если нужны)
    react: {
      bindI18n: "languageChanged",
      bindI18nStore: "",
      transEmptyNodeValue: "",
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
      useSuspense: true,
    },
  });

export default i18n;
