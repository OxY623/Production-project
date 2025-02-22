import {userActions, userReducer} from "./model/slice/userSlice";
import {UserSchema, User} from "./model/type/userType";
import {selectorGetAuthData} from "./model/selector/selectorGetAuthData";

export {userActions, userReducer, UserSchema, User, selectorGetAuthData};
