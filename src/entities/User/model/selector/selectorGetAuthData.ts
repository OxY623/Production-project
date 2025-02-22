import {StateSchema} from "app/providers/StoreProvider";

export const selectorGetAuthData = (state: StateSchema) => state.user.authData;
