
import { ACTIVE_TRACKER_SET } from "../actions/action_types";

const initialState = {
  activeTracker: {},
};

const activeTrackingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_TRACKER_SET:
      return {
        ...state,
        activeTracker: action.activeTracker
      };
    default:
      return state;
  }
};


export default activeTrackingReducer;