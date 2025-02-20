import React, {useState} from "react";
import * as styles from "./LoginForm.module.scss";
import {classNames} from "shared/libs/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";

type Props = {
  className?: string;
};

const LoginForm = ({className}: Props) => {
  const {t} = useTranslation();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onChangeName = (value: string) => {
    setUserName(value);
  };

  const onChangePassword = (value: string) => {
    setPassword(value);
  };
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={classNames(styles.LoginForm, {}, [className])}
    >
      {/* <label className="styles.label" htmlFor="login">
        {t("Логин")}
      </label> */}
      <Input
        autofocus={true}
        label={t("Логин")}
        className="styles.input"
        id="login"
        type="text"
        value={userName}
        onChange={onChangeName}
        placeholder={t("Введите логин")}
      />
      {/* <label className="styles.label" htmlFor="password">
        {t("Пароль")}
      </label> */}
      <Input
        label={t("Пароль")}
        className="styles.input"
        id="password"
        type="password"
        value={password}
        onChange={onChangePassword}
        placeholder={t("Введите пароль")}
      />
      <Button className="styles.loginBtn">{t("Войти")}</Button>
    </form>
  );
};

export {LoginForm};
