import {combineReducers} from 'redux';
import member from './memberReducer';

const rootReducer = combineReducers({
  member
});

export default rootReducer;