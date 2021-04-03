import { createStore, combineReducers } from 'redux';
import classReducer from './reducers/class_reducers';
import boardReducer from './reducers/board_reducers';
import subjectReducer from './reducers/subject_reducers';
import chapterReducer from './reducers/chapter_reducers';
import contentReducer from './reducers/content_reducers';
import activeTrackingReducer from './reducers/tracking_reducers';

const rootReducer = combineReducers({
    boardInfo: boardReducer,
    classInfo: classReducer,
    subjectInfo: subjectReducer,
    chapterInfo: chapterReducer,
    contentInfo: contentReducer,
    trackingInfo: activeTrackingReducer
});

const configStore = () => {
    return createStore(rootReducer);
};

export default configStore;