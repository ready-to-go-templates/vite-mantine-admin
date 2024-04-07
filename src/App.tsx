import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Router from './Router';
import { theme } from './theme';

import '@mantine/core/styles.css';

export default function App() {
  return (
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <Router />
      </MantineProvider>
    </BrowserRouter>
  );
}
