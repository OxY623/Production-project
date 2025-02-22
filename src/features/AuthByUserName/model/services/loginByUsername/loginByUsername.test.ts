import {loginByUsername, LoginByUsernameProps, LoginResponse} from "./loginByUsername";
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {USER_LOCALSTORAGE_TOKEN_KEY} from "shared/const/localStorage";
import {StateSchema} from "app/providers/StoreProvider";
import {createReduxStore} from "app/providers/StoreProvider";
import {User, userActions} from "entities/User";

const initialState: StateSchema = {
  user: {
    authData: undefined,
  },
  counter: {
    value: 0,
  },
  loginForm: {
    username: "",
    password: "",
    error: undefined,
    isLoading: false,
  },
};
const mock = new MockAdapter(axios);
const store = createReduxStore(initialState);

describe("loginByUsername", () => {
  afterEach(() => {
    mock.reset();
    localStorage.clear();
  });

  test("should login successfully and store token", async () => {
    const user = {id: "1", username: "John Doe"};
    const token = "fake-token";
    const loginResponse: LoginResponse = {
      user,
      token,
    };

    mock.onPost("http://localhost:8000/login").reply(200, loginResponse);

    const loginProps: LoginByUsernameProps = {username: "John Doe", password: "123"};
    const result = await store.dispatch(loginByUsername(loginProps));

    expect(result.type).toBe("login/loginByUserName/fulfilled");
    expect(result.payload).toEqual(loginResponse);
    expect(localStorage.getItem(USER_LOCALSTORAGE_TOKEN_KEY)).toBe(token);
    expect(store.getState().user.authData?.username).toBe(
      userActions.setAuthData(loginResponse).payload.user.username,
    );
  });

  test("should fail with invalid credentials", async () => {
    mock.onPost("http://localhost:8000/login").reply(401);

    const loginProps: LoginByUsernameProps = {username: "admin", password: "wrong-password"};
    const result = await store.dispatch(loginByUsername(loginProps));

    expect(result.type).toBe("login/loginByUserName/rejected");
    expect(result.payload).toBe("Invalid credentials");
    expect(localStorage.getItem(USER_LOCALSTORAGE_TOKEN_KEY)).toBeNull();
  });
});
