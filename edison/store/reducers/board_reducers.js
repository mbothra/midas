
import { BOARD_SET, ROLE_SET, USERID_SET } from "../actions/action_types";

const initialState = {
  board: 'Maharshtra Board',
  role: null,
  userName: null
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOARD_SET:
      return {
        ...state,
        board: action.board
      };
    case ROLE_SET:
      return {
        ...state,
        role: action.role
      };
    case USERID_SET:
      return {
        ...state,
        userId: action.userId
      };
    default:
      return state;
  }
};


export default boardReducer;