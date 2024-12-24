import {classNames} from "shared/helpers/classNames/classNames";
import {FC} from "react";
import {ButtonProps} from "./Button.types";
import * as styles from "./Button.module.scss";

const Button: FC<ButtonProps> = (props) => {
  const {className, children, theme, ...otherProps} = props;
  return (
    <button
      {...otherProps}
      className={classNames(styles.Button, theme ? {[styles[theme]]: true} : {}, [className])}
    >
      {children}
    </button>
  );
};

export default Button;
