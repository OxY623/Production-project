import React, {memo, useCallback} from "react";
import * as styles from "./LoginForm.module.scss";
import {classNames} from "shared/libs/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";
import {ThemeButton} from "shared/ui/Button/Button.types";
import {useDispatch, useSelector} from "react-redux";
import {loginActions} from "features/AuthByUserName/model/slice/loginSlice";
import {selectLoginState} from "features/AuthByUserName/model/selectors/selectLoginState/selectLoginSate";

type Props = {
  className?: string;
};

const LoginForm = memo(({className}: Props) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const LoginForm = useSelector(selectLoginState);
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");

  const onChangeName = useCallback(
    (value: string) => {
      // setUserName(value);
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      // setPassword(value);
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  if (LoginForm.isLoading) {
    return <div>Идет загрузка</div>;
  }

  if (LoginForm?.error && LoginForm?.error.length > 0) {
    return <div>{LoginForm.error}</div>;
  }

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
        value={LoginForm.username}
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
        value={LoginForm.password}
        onChange={onChangePassword}
        placeholder={t("Введите пароль")}
      />
      <Button theme={ThemeButton.OUTLINE} className="styles.loginBtn">
        {t("Войти")}
      </Button>
    </form>
  );
});

export {LoginForm};
