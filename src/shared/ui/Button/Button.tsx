import {classNames} from "shared/libs/classNames/classNames";
import React from "react";
import {ButtonProps} from "./Button.types";
import * as styles from "./Button.module.scss";
import {ThemeButton} from "./Button.types";

const Button: React.FC<ButtonProps> = (props) => {
  const {className, children, theme, ...otherProps} = props;

  const buttonClassName = classNames(
    styles.Button,
    theme && theme !== undefined ? {[styles[theme as ThemeButton]]: true} : {},
    [className],
  );

  return (
    <button {...otherProps} className={buttonClassName}>
      {children}
    </button>
  );
};

export {Button};
