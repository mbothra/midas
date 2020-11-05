import { CLASS_SET } from "./action_types";

export const classSet = (className) => {
    return{
        type: CLASS_SET,
        className
    }
}