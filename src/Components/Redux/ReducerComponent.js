import { ActionType } from "./ActionType";

const initialState = {
  api: [],
};

const ReducerComponent = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_COURSEAPI:
      console.log(action.data, "hslakhfk");
      return { ...state, course: action.data };

    case ActionType.GET_STAFFAPI:
      return { ...state, staff: action.data };

    case ActionType.GET_STUDENTAPI:
      return { ...state, student: action.data };
    default:
      return state;
  }
};

export default ReducerComponent;
