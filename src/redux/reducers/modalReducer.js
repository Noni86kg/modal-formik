import { ActionTypes } from "../constants/action-types";
const intialState = [];

export const modalState = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.OPEN_MODAL:
      return [...state, payload];
      break;

    case ActionTypes.CLOSE_MODAL:
      return state.filter((item, index) => index !== payload);
      break;

    case ActionTypes.NUM_OF_MODALS:
      return state.modals.length;
      break;

    default:
      return state;
  }
};
