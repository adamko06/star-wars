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

const client = new ApolloClient({
  uri: 'http://localhost:5002/graphql',
  cache: new InMemoryCache(),
});

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

  return (
    <SSRProvider>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Head>
            <title>Star Wars</title>
          </Head>
          <Header />
            <Component {...pageProps} />
          <Footer />
        </ApolloProvider>
      </Provider>
    </SSRProvider>
  );
};

export default wrapper.withRedux(MyApp);
