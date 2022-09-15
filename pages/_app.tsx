import type { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';
import { theme } from '../theme';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
