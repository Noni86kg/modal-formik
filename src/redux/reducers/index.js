import { combineReducers } from "redux";
import { productsReducer, aboutUser } from "./productsReducer";
import { modalState } from "./modalReducer";

const reducers = combineReducers({
  cart: productsReducer,
  user: aboutUser,
  modals: modalState,
});

export default reducers;
