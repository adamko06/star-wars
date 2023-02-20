import { combineReducers } from 'redux';
import filterByMovieReducer from './reducers/filterByMovieReducer';
import pageReducer from './reducers/pageReducer';
import heroesReducer from './reducers/heroesReducer';

// COMBINED REDUCERS
const reducers = combineReducers({
  heroes: heroesReducer,
  filterByMovie: filterByMovieReducer,
  pagination: pageReducer,
});

export default reducers;
