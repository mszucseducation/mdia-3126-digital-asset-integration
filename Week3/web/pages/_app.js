import 'semantic-ui-css/semantic.min.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
