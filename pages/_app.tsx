import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../layout/Layout'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { config } from "@fortawesome/fontawesome-svg-core";
import { ThemeProvider } from '../context/ThemeContext';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {

  return <>
    <Provider store={store}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </ThemeProvider>
    </Provider>
  </>
}

export default MyApp
