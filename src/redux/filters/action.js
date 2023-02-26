import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";

export const filterColorChanged = (color, changeType) => {
  return {
    type: COLORCHANGED,
    payload: {
      color,
      changeType,
    },
  };
};

export const changeStatus = (status) => {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
};
