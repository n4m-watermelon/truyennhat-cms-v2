import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userSlice from "./userSlice";
import mangaSlice from "./mangaSlice";
const reducer = combineReducers({
  user: userSlice,
  manga: mangaSlice,
});
const store = configureStore({
  reducer,
});
export default store;
