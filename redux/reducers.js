import { combineReducers } from 'redux';
import charReducer from './reducers/charReducer';
import pageReducer from './reducers/pageReducer';
import favoriteReducer from './reducers/favoriteReducer';

// COMBINED REDUCERS
const reducers = combineReducers({
  chars: charReducer,
  pagination: pageReducer,
  favorites: favoriteReducer,
});

export default reducers;
