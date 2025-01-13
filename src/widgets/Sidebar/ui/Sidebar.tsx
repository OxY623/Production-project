import {classNames} from "shared/libs/classNames/classNames";
import {Button} from "shared/ui/Button/Button";
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";
import {useTranslation} from "react-i18next";
import {ButtonSize, ThemeButton} from "shared/ui/Button/Button.types";
import AppLink from "shared/ui/AppLink/AppLink";
import {AppLinkTheme} from "shared/ui/AppLink/AppLink.types";
import {RoutePatch} from "shared/config/routeConfig/routeConfig";
import {Home, BookOpen} from "lucide-react";
import * as styles from "./Sidebar.module.scss";

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
      <Button
        className={styles.collapsedBtn}
        data-testid="sidebar-toggle"
        onClick={onToggle}
        theme={ThemeButton.BACKGROUND_INVERTED}
        square={true}
        size={ButtonSize.L}
      >
        {/* {t("Переключатель")} */}
        {collapsed ? ">" : "<"}
      </Button>
      <div className={styles.items}>
        <AppLink className="item" theme={AppLinkTheme.SECONDARY} to={RoutePatch.main}>
          <Home className={styles.icon} />
          <span className={styles.link}>{t("Главная станица")}</span>
        </AppLink>

        <AppLink className="item" theme={AppLinkTheme.SECONDARY} to={RoutePatch.about}>
          <BookOpen className={styles.icon} />
          <span className={styles.link}>{t("О нас")}</span>
        </AppLink>
      </div>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};
