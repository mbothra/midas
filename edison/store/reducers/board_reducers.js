
import { BOARD_SET } from "../actions/action_types";

const initialState = {
  board: 'Maharshtra Board'
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOARD_SET:
      return {
        ...state,
        board: action.board
      };

    default:
      return state;
  }
};

export default boardReducer;