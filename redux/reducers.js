import { combineReducers } from 'redux';
import counterReducer from './reducers/counterReducer';
import charReducer from './reducers/charReducer';
import pageReducer from './reducers/pageReducer';

// COMBINED REDUCERS
const reducers = combineReducers({
  counter: counterReducer,
  chars: charReducer,
  pagination: pageReducer,
});

export default reducers;
