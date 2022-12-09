import Head from 'next/head';
import Header from '../components/Header/index.js';

// redux
import { Provider } from 'react-redux';
import { wrapper, store } from '../redux/store';

import '../styles/styles.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>Star Wars</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
};

export default wrapper.withRedux(MyApp);
