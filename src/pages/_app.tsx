import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { FirebaseProvider } from 'context';
import { GlobalStyles, theme } from 'styles';

const App = ({ Component, pageProps }: AppProps) => (
  <FirebaseProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  </FirebaseProvider>
);

export default App;
