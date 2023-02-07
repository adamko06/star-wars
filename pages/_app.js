/* original */

import Head from 'next/head';
import Header from '../components/Header/index.js';

// redux
import { Provider } from 'react-redux';
import { wrapper, store } from '../redux/store';

import { useRouter } from 'next/router';

import '../styles/styles.scss';
import '../styles/alert.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>Star Wars</title>
      </Head>
      {/* {useRouter().route === '/lyrics' ? <Header lyrics /> : <Header />} */}
      <Header></Header>
      <Component {...pageProps} />
    </Provider>
  );
};

export default wrapper.withRedux(MyApp);

/* redux-persist 

import Head from 'next/head';
import Header from '../components/Header/index.js';

// redux
import { Provider } from 'react-redux';
import { persistor, store } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import { useRouter } from 'next/router';

import '../styles/styles.scss';
import '../styles/alert.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Head>
          <title>Star Wars</title>
        </Head>
        {useRouter().route === '/lyrics' ? <Header lyrics /> : <Header />}
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
*/
