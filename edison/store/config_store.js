import { createStore, combineReducers } from 'redux';
import boardReducer from './reducers/board_reducers';

const rootReducer = combineReducers({
    boardInfo: boardReducer,
});

const configStore = () => {
    return createStore(rootReducer);
};

export default configStore;