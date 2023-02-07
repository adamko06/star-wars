/* without localStorage original */
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: [...middleware],
  devTools: process.env.NODE_ENV !== 'production',
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

/* redux-persist 

import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const initialState = {};

const middleware = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  preloadedState: initialState,
  middleware: [...middleware],
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
*/
