import {useTranslation} from "react-i18next";
import {BugButton} from "app/providers/ErrorBoundary";
import React from "react";

const MainPage: React.FC = () => {
  const {t} = useTranslation("main");
  return (
    <div>
      <h2>{t("Главная страница")}</h2>
      <BugButton />
    </div>
  );
};

export default MainPage;
