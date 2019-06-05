import { combineReducers } from "redux";
import movieAppReducer from "./movieAppReducer";

export const reducers = combineReducers({
  app: movieAppReducer
});
