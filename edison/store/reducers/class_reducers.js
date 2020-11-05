
import { CLASS_SET } from "../actions/action_types";

const initialState = {
  className: 'Class 1'
};

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLASS_SET:
      return {
        ...state,
        className: action.className
      };

    default:
      return state;
  }
};

export default classReducer;