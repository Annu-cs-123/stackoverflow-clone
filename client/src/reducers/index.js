import { combineReducers } from "redux";

import authReducer from "./auth";
import usersReducer from "./users";
import questionReducer from "./questions";
import currentUserReducer from "./currrentUser";

export default combineReducers({
  authReducer,
  currentUserReducer,
  questionReducer,
  usersReducer,
});
