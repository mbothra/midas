
import { CHAPTER_SET } from "../actions/action_types";

const initialState = {
  chapterName: 'Chapter 1'
};

const chapterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHAPTER_SET:
      return {
        ...state,
        chapterName: action.chapterName
      };

    default:
      return state;
  }
};

export default chapterReducer;