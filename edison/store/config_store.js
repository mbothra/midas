import { createStore, combineReducers } from 'redux';
import classReducer from './reducers/class_reducers';
import boardReducer from './reducers/board_reducers';
import subjectReducer from './reducers/subject_reducers';
import chapterReducer from './reducers/chapter_reducers';

const rootReducer = combineReducers({
    boardInfo: boardReducer,
    classInfo: classReducer,
    subjectInfo: subjectReducer,
    chapterInfo: chapterReducer
});

const configStore = () => {
    return createStore(rootReducer);
};

export default configStore;