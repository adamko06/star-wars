import { combineReducers } from 'redux';
import counterReducer from './reducers/counterReducer';
import charReducer from './reducers/charReducer';

// COMBINED REDUCERS
const reducers = combineReducers({
  counter: counterReducer,
  chars: charReducer,
});

export default reducers;
