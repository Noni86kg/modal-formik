import { ActionTypes } from "../constants/action-types";

export const addModal = (content) => {
  return {
    type: ActionTypes.OPEN_MODAL,
    payload: content,
  };
};

export const closeModal = (id) => {
  return {
    type: ActionTypes.CLOSE_MODAL,
    payload: id,
  };
};

export const numOfModals = (num) => {
  return {
    type: ActionTypes.NUM_OF_MODALS,
    payload: num,
  };
};
