import {FC} from "react";
import {Link} from "react-router-dom";
import * as cls from "./AppLink.module.scss";
import {classNames} from "shared/helpers/classNames/classNames";
import {AppLinkTheme} from "./AppLink.types";
import {AppLinkProps} from "./AppLink.types";

const AppLink: FC<AppLinkProps> = (props) => {
  const {to, className, theme = AppLinkTheme.PRIMARY, children, ...otherProps} = props;
  return (
    <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </Link>
  );
};

export default AppLink;
