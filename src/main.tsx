import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import 'aos/dist/aos.css';
import { Provider } from 'react-redux';

import theme from './helpers/thems.ts';
import store from './app/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </StrictMode>,
)
