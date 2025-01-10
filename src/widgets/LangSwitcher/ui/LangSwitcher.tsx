import {classNames} from "shared/libs/classNames/classNames";
import * as cls from "./LangSwitcher.module.scss";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {ThemeButton} from "shared/ui/Button/Button.types";
import Button from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher: FC = ({className}: LangSwitcherProps) => {
  const {t, i18n} = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t("Перевод")}
    </Button>
  );
};

export {LangSwitcher};
