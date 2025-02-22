import {createSlice} from "@reduxjs/toolkit";
import {User, UserSchema} from "../type/userType";
import {USER_LOCALSTORAGE_TOKEN_KEY} from "shared/const/localStorage";
import {checkAuth} from "entities/User/services/authService";

const initialState: UserSchema = {
  authData: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: {payload: {user: User}}) => {
      state.authData = action.payload.user;
    },
    // initAuthData: (state) => {
    //   const user = localStorage.getItem(USER_LOCALSTORAGE_TOKEN_KEY);
    //   if (user) {
    //     state.authData = JSON.parse(user);
    //   }
    // },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_TOKEN_KEY);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.fulfilled, (state, action) => {
        console.log(action.payload);
        state.authData = action.payload.user;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authData = undefined;
        localStorage.removeItem(USER_LOCALSTORAGE_TOKEN_KEY);
      });
  },
});

// Action creators are generated for each case reducer function
export const {actions: userActions} = userSlice;
export const {reducer: userReducer} = userSlice;
