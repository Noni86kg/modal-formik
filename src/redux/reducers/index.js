import { combineReducers } from "redux";
import { modalState } from "./modalReducer";

const reducers = combineReducers({
  modals: modalState,
});

export default reducers;
