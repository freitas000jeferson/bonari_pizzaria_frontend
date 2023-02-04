import '@/assets/scss/argon-design-system-react.scss?v1.1.0';
import '@/assets/vendor/font-awesome/css/font-awesome.min.css';
import '@/assets/vendor/nucleo/css/nucleo.css';
import SEO from '@/core/config/api/next-seo-config';
import { persisetdStore, store } from '@/core/store';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persisetdStore}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
