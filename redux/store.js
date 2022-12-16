import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers';

// initial states here
const initalState = [];

// middleware
const middleware = [thunk];

// creating store
// export const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(...middleware)));

// DOTAZ !!!
// WHY ->
export const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(...middleware)));
// WHY not ->
// export const store = createStore(rootReducer);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
