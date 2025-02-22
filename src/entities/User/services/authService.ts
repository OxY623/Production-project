import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {User} from "../model/type/userType";
import {USER_LOCALSTORAGE_TOKEN_KEY} from "shared/const/localStorage";

export interface AuthResponse {
  user: User;
}

export const checkAuth = createAsyncThunk<AuthResponse, void, {rejectValue: string}>(
  "user/checkAuth",
  async (_, thunkApi) => {
    try {
      const token = localStorage.getItem(USER_LOCALSTORAGE_TOKEN_KEY);
      if (!token) {
        throw new Error("No token found");
      }

      const response = await axios.get<AuthResponse>("http://localhost:8000/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e);
      return thunkApi.rejectWithValue("Invalid token");
    }
  },
);
