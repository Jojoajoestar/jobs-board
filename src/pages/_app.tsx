/**
 * MyApp Component
 *
 * This is the custom App component that wraps all pages in the application.
 * It applies global styles and layout to all pages.
 *
 * Example:
 * <MyApp Component={Component} pageProps={pageProps} />
 */

import { AppProps } from 'next/app';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex-container">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
