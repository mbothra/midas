
import { SUBJECT_SET } from "../actions/action_types";

const initialState = {
  subjectName: 'Geography'
};

const subjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBJECT_SET:
      return {
        ...state,
        subjectName: action.subjectName
      };

    default:
      return state;
  }
};

export default subjectReducer;