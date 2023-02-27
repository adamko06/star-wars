import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

import { GET_HEROES } from '../graphql/quieries/heroQueries';

const middleware = [thunk];

const client = new ApolloClient({
  link: new HttpLink({ uri: process.env.API_URL }),
  cache: new InMemoryCache(),
});
console.log('store', process.env.API_URL);

const fetchInitialData = async () => {
  const { data } = await client.query({
    query: GET_HEROES,
  });
  return data;
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...middleware],
  devTools: process.env.NODE_ENV !== 'production',
});

store.dispatch(async () => {
  const data = await fetchInitialData();
  store.dispatch({ type: 'SETHEROES', heroes: data.heroes });
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

export { client };
