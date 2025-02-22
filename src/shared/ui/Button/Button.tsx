import {classNames} from "shared/libs/classNames/classNames";
import React from "react";
import {ButtonProps, ButtonSize} from "./Button.types";
import {ThemeButton} from "./Button.types";
import * as styles from "./Button.module.scss";

const Button: React.FC<ButtonProps> = (props) => {
  const {className, children, theme, square, size = ButtonSize.M, ...otherProps} = props;

  // const mods: Record<string, boolean> =
  //   theme && theme !== undefined ? {[styles[theme as ThemeButton]]: true} : {};
  const mods: Record<string, boolean> = {
    [theme ? styles[theme as ThemeButton] : ""]: !!theme,
    [styles.square]: !!square,
    [styles[size as ButtonSize]]: !!size,
    [styles.disabled]: !!otherProps.disabled,
  };

  const buttonClassName = classNames(styles.Button, mods, [className]);

  return (
    <button disabled={otherProps.disabled} {...otherProps} className={buttonClassName}>
      <span>{children}</span>
    </button>
  );
};

export {Button};
