// import {Link} from "react-router-dom";
import {classNames} from "shared/libs/classNames/classNames";
import * as cls from "./Navbar.module.scss";
import AppLink from "shared/ui/AppLink/AppLink";
import {AppLinkTheme} from "shared/ui/AppLink/AppLink.types";
import React from "react";
import {useTranslation} from "react-i18next";
interface NavbarProps {
  className?: string;
}

const Navbar: React.FC = ({className}: NavbarProps) => {
  const {t} = useTranslation("navbar");
  return (
    <nav className={classNames(cls.navbar, {}, [])}>
      <ul className={cls.navbar__links}>
        <li>
          <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to="/">
            {t("Главная станица")}
          </AppLink>
        </li>
        <li>
          <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to="/about">
            {t("О нас")}
          </AppLink>
        </li>
      </ul>
    </nav>
  );
};

export {Navbar};
