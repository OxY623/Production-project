import {classNames} from "shared/libs/classNames/classNames";
import {useTranslation} from "react-i18next";
import {FC} from "react";
import * as cls from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC = ({className}: NotFoundPageProps) => {
  const {t} = useTranslation();

  return <div className={classNames(cls.NotFoundPage, {}, [])}>{t("Страница не найдена")}</div>;
};

export {NotFoundPage};
