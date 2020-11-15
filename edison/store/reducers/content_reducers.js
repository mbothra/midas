
import { CONTENT_SET } from "../actions/action_types";

const initialState = {
  contentIndex: 0,  
  contentType: 'Videos'
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTENT_SET:
      return {
        ...state,
        contentType: action.contentTypeNew,
        contentIndex: action.contentIndexNew
      };

    default:
      return state;
  }
};

export default contentReducer;