import React, {memo, useCallback} from "react";
import * as styles from "./LoginForm.module.scss";
import {classNames} from "shared/libs/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";
import {ThemeButton} from "shared/ui/Button/Button.types";
import {useSelector} from "react-redux";
import {loginActions} from "features/AuthByUserName/model/slice/loginSlice";
import {selectLoginState} from "features/AuthByUserName/model/selectors/selectLoginState/selectLoginSate";
import {loginByUsername} from "features/AuthByUserName/model/services/loginByUsername/loginByUsername";
import {useAppDispatch} from "app/providers/StoreProvider";
import {Text, TextTheme} from "shared/ui/Text/Text";
export type PropsLoginForm = {
  className?: string;
};

const LoginForm = memo(({className}: PropsLoginForm) => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const {username, password, error, isLoading} = useSelector(selectLoginState);
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

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({username, password}));
  }, [dispatch, password, username]);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={classNames(styles.LoginForm, {}, [className])}
    >
      <Text title={t("Форма авторизации")} />
      {/* <label className="styles.label" htmlFor="login">
        {t("Логин")}
      </label> */}
      <Input
        autofocus={true}
        label={t("Логин")}
        className="styles.input"
        id="login"
        type="text"
        value={username}
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
      <Button
        theme={ThemeButton.OUTLINE}
        className="styles.loginBtn"
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t("Войти")}
      </Button>
      {error && error.length > 0 && (
        <Text text={t("Вы ввели неправильные данные")} theme={TextTheme.ERROR} />
      )}
    </form>
  );
});

export {LoginForm};
// function loginByUsername(arg0: {username: string; password: string}): any {
//   throw new Error("Function not implemented.");
// }
