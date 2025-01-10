import {useTranslation} from "react-i18next";

const AboutPage = () => {
  const {t} = useTranslation("about");
  return (
    <div>
      <h2>{t("О странице")}</h2>
      {/* <AboutMe /> */}
    </div>
  );
};

export default AboutPage;
