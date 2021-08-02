import {
  ADD_COUNT,
  SUB_COUNT,
  MULTIPLY,
  DIVISION,
  RESET
} from "./actionTypes.js";

const initState = {
  result: 0
};

export const reducerFunction = (state = initState, action) => {
  //here action can be destructuredd as {type, payload}
  console.log(state, action);

  switch (action.type) {
    case ADD_COUNT:
      return {
        ...state,
        result: state.result + Number(action.payload)
      };

    case SUB_COUNT:
      return {
        ...state,
        result: state.result - Number(action.payload)
      };
    case MULTIPLY:
      return {
        ...state,
        result: state.result * Number(action.payload)
      };
    case DIVISION:
      return {
        ...state,
        result: Number((state.result / Number(action.payload)).toFixed(2))
      };
    case RESET:
      return {
        ...state,
        result: 0
      };
    default:
      return state;
  }
};
