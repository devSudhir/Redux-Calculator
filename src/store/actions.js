import {
  ADD_COUNT,
  SUB_COUNT,
  MULTIPLY,
  DIVISION,
  RESET
} from "./actionTypes.js";
export const addCount = (count) => {
  return {
    type: ADD_COUNT,
    payload: count
  };
};

export const subCount = (count) => {
  return {
    type: SUB_COUNT,
    payload: count
  };
};
export const multiply = (count) => {
  return {
    type: MULTIPLY,
    payload: count
  };
};
export const division = (count) => {
  return {
    type: DIVISION,
    payload: count
  };
};
export const reset = () => {
  return {
    type: RESET
  };
};
