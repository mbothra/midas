import { CONTENT_SET, VIDEO_SET } from "./action_types";

export const contentSet = (newIndex,contentType) => {

    return{
        type: CONTENT_SET,
        contentIndexNew: newIndex,
        contentTypeNew: contentType
    }
}


export const videoSet = (videoId) => {

    return{
        type: VIDEO_SET,
        videoId: videoId
    }
}