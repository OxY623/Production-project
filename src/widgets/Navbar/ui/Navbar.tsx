// import {Link} from "react-router-dom";
import {classNames} from "shared/libs/classNames/classNames";
import * as styles from "./Navbar.module.scss";
import React from "react";
import {useTranslation} from "react-i18next";
interface NavbarProps {
  className?: string;
}

const Navbar: React.FC = ({className}: NavbarProps) => {
  const {t} = useTranslation("navbar");
  return (
    <nav className={classNames(styles.navbar, {}, [])}>
      <ul className={styles.navbar__links}>
        <li>Место ссылки</li>
        <li>Место ссылки</li>
      </ul>
    </nav>
  );
};

export {Navbar};
