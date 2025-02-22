import {classNames} from "shared/libs/classNames/classNames";
import * as styles from "./Text.module.scss";
import React from "react";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

export interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

const Text = ({className, title, text, theme = TextTheme.PRIMARY}: TextProps) => {
  return (
    <div className={classNames(styles.Text, {[styles[theme as TextTheme]]: true}, [className])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};

export {Text};
