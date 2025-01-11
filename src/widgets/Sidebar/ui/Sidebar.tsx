import {classNames} from "shared/libs/classNames/classNames";
import * as styles from "./Sidebar.module.scss";
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";
import {useTranslation} from "react-i18next";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({className}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {t} = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}
    >
      <button data-testid="sidebar-toggle" onClick={onToggle}>
        {t("Переключатель")}
      </button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
