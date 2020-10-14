import { combineReducers } from "redux";
import { gamesReducer } from "./gamesReducer";
import { usersReducer } from "./usersReducer";

export const rootReducer = combineReducers({
  games: gamesReducer,
  users: usersReducer,
});
