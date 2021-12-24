import Theme from '../styles/theme';
import "tailwindcss/tailwind.css";
import '../styles/globals.css';
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tule Simon - Android, Flutter and Web Dev</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
