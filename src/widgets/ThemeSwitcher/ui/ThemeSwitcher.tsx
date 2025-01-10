import * as styles from "./ThemeSwitcher.module.scss";
import React from "react";
import {useTheme} from "app/providers/ThemeProviders";
import {classNames} from "shared/libs/classNames/classNames";
import DarkIcon from "shared/assets/icons/themeDark.svg";
import LightIcon from "shared/assets/icons/themeLight.svg";
import {Theme} from "app/providers/ThemeProviders/ui/ThemeContext";
import Button from "shared/ui/Button/Button";
import {ThemeButton} from "shared/ui/Button/Button.types";
interface ThemeSwitcherProps {
  additionalClasses?: string;
}

const iconStyle: React.CSSProperties = {
  width: "100%",
  height: "auto",
};

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({additionalClasses}) => {
  const {theme, toggleTheme} = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(styles.ThemeSwitcher, {}, [additionalClasses])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon style={iconStyle} /> : <LightIcon style={iconStyle} />}
    </Button>
  );
};

export {ThemeSwitcher};
