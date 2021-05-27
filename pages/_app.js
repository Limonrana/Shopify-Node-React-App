import { Provider } from '@shopify/app-bridge-react';
import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import '../styles/style.css';
//import ClientRouter from '../components/ClientRouter';

class MyApp extends App {
  render() {
    const { Component, pageProps, shopOrigin } = this.props;

    const config = { apiKey: API_KEY, shopOrigin, forceRedirect: true };
    return (
      <React.Fragment>
        <Head>
          <title>Sample App</title>
          <meta charSet="utf-8" />
        </Head>
        <Provider config={config}>
        <Component {...pageProps} />
          {/* <ClientRouter /> */}
          {/* <AppProvider i18n={translations}>
            
          </AppProvider> */}
        </Provider>
      </React.Fragment>
    );
  }
}

MyApp.getInitialProps = async ({ ctx }) => {
  return {
    shopOrigin: ctx.query.shop,
  }
}

export default MyApp;