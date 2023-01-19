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
  // (useRouter().route === '/lyrics') ? <Header /> : <Header />

  return (
    <Provider store={store}>
      <Head>
        <title>Star Wars</title>
      </Head>
      {useRouter().route === '/lyrics' ? <Header lyrics /> : <Header />}
      <Component {...pageProps} />
    </Provider>
  );
};

export default wrapper.withRedux(MyApp);
