import { createStore, combineReducers } from 'redux';
import classReducer from './reducers/class_reducers';
import boardReducer from './reducers/board_reducers';

const rootReducer = combineReducers({
    boardInfo: boardReducer,
    classInfo: classReducer,
});

const configStore = () => {
    return createStore(rootReducer);
};

export default configStore;