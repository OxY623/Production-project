import {useTranslation} from "react-i18next";
import React from "react";
import {Counter} from "entities/Counter";

const MainPage: React.FC = () => {
  const {t} = useTranslation("main");
  return (
    <div>
      <h2>{t("Главная страница")}</h2>
      {/* <BugButton /> */}
      <Counter />
    </div>
  );
};

export default MainPage;
