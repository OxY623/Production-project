import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {User, userActions} from "entities/User";
import i18n from "shared/config/i18n/i18n";
import {USER_LOCALSTORAGE_TOKEN_KEY} from "shared/const/localStorage";

// Типы для данных пользователя и ответа
export interface LoginByUsernameProps {
  username: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export const loginByUsername = createAsyncThunk<
  LoginResponse, // Правильный тип возвращаемых данных
  LoginByUsernameProps,
  {rejectValue: string}
>("login/loginByUserName", async ({username, password}: LoginByUsernameProps, thunkApi) => {
  try {
    // Отправка запроса на сервер
    const response = await axios.post<LoginResponse>("http://localhost:8000/login", {
      username,
      password,
    });

    // Проверка на наличие токена и пользователя
    if (!response.data || !response.data.token || !response.data.user) {
      throw new Error(i18n.t("Invalid credentials"));
    }

    thunkApi.dispatch(userActions.setAuthData(response.data));

    // Сохраняем токен в localStorage
    localStorage.setItem(USER_LOCALSTORAGE_TOKEN_KEY, response.data.token);

    // Возвращаем пользователя и токен
    return {
      user: response.data.user,
      token: response.data.token,
    };
  } catch (e) {
    console.log(e);
    // Возвращаем ошибку с переводом
    return thunkApi.rejectWithValue("Invalid credentials");
  }
});
