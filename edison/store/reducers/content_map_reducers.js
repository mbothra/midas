
import { CONTENT_MAP_SET } from "../actions/action_types";

const initialState = {
};

const contentMapReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTENT_MAP_SET:
        console.log({ action })
        debugger
        return {
        ...state,
      };

    default:
      return state;
  }
};

export default contentMapReducer;