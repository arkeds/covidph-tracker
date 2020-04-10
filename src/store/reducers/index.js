import { combineReducers } from 'redux';
import casesReducer from './cases';

const rootReducer = combineReducers({
    case: casesReducer,
});

export default rootReducer;