import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from 'styles';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
