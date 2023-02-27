import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

// redux
import { Provider } from 'react-redux';
import { wrapper, store } from '../redux/store';

import Head from 'next/head';
import Header from '../components/Header/index.js';
import Footer from '../components/Footer/index.js';

import { SSRProvider } from '@react-aria/ssr';

import '../styles/styles.scss';
import '../styles/alert.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useRouter } from 'next/router';

import { useEffect, useRef, useState } from 'react';

const client = new ApolloClient({
  uri: process.env.API_URL,
  cache: new InMemoryCache(),
});

console.log('app', process.env.API_URL);

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  if (typeof window !== 'undefined') {
    if (router.pathname === '/') {
      if (!localStorage.getItem('isLoaded')) {
        localStorage.setItem('isLoaded', true);
        router.replace('/lyrics');
      }
    }
  }

  // mainStyle
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [headerRef]);

  const mainStyle = {
    minHeight: `calc(100svh - ${headerHeight}px)`,
    paddingTop: `${router.pathname !== '/lyrics' ? '50px' : '0px'}`,
  };

  return (
    <SSRProvider>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Head>
            <title>Star Wars</title>
          </Head>
          <Header ref={headerRef} />
          <main style={mainStyle}>
            <Component {...pageProps} />
          </main>
          <Footer />
        </ApolloProvider>
      </Provider>
    </SSRProvider>
  );
};

export default wrapper.withRedux(MyApp);
