import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AppRoutes } from './AppRoutes';
import { GlobalStyles, theme } from './Theme';
import { Layout } from './components/Layout/Layout';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
