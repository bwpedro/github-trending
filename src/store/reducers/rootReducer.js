import repositoryReducer from './repositoryReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    repository: repositoryReducer,
});

export default rootReducer;