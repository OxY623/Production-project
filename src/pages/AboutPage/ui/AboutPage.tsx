import {useTranslation} from "react-i18next";
import React from "react";

const AboutPage: React.FC = () => {
  const {t} = useTranslation("about");
  return (
    <div>
      <h2>{t("О странице")}</h2>
      {/* <AboutMe /> */}
    </div>
  );
};

export default AboutPage;
