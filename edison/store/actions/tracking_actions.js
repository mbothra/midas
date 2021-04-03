import { ACTIVE_TRACKER_SET } from "./action_types";

export const activeTrackingScreenSet = (activeTracker) => {
    return{
        type: ACTIVE_TRACKER_SET,
        activeTracker
    }
}