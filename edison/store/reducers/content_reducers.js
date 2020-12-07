
import { CONTENT_SET, VIDEO_SET } from "../actions/action_types";

const initialState = {
  contentIndex: 0,  
  contentType: 'Videos',
  videoIndex: null
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTENT_SET:
      return {
        ...state,
        contentType: action.contentTypeNew,
        contentIndex: action.contentIndexNew
      };
    case VIDEO_SET:
        return {
          ...state,
          videoIndex: action.videoIndex,
        };
    default:
      return state;
  }
};

export default contentReducer;