import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { GET_HEROES } from '../graphql/quieries/heroQueries';

import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { createWrapper } from 'next-redux-wrapper';

const client = new ApolloClient({
  link: new HttpLink({ uri: process.env.API_URL }),
  cache: new InMemoryCache(),
});

const fetchInitialData = async () => {
  const { data } = await client.query({
    query: GET_HEROES,
  });
  return data;
};

const middleware = [thunk];
export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

store.dispatch(async () => {
  const data = await fetchInitialData();
  store.dispatch({ type: 'SET_HEROES', heroes: data.heroes });
});

const makeStore = () => store;
export const wrapper = createWrapper(makeStore);

export { client };
