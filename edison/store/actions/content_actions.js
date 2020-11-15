import { CONTENT_SET } from "./action_types";

export const contentSet = (newIndex,contentType) => {

    return{
        type: CONTENT_SET,
        contentIndexNew: newIndex,
        contentTypeNew: contentType
    }
}