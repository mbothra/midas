import { CHAPTER_SET } from "./action_types";

export const chapterSet = (chapterName) => {
    return{
        type: CHAPTER_SET,
        chapterName
    }
}