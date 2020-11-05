import { SUBJECT_SET } from "./action_types";

export const subjectSet = (subjectName) => {
    return{
        type: SUBJECT_SET,
        subjectName
    }
}