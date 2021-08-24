import React from 'react';

import './App.css';

// libs
import { BrowserRouter } from 'react-router-dom';

// components
import RouteView from 'routing/RouteView';

// styles
import GlobalStyles from 'theme/globalStyles';
import { createStore } from 'store/helpers/createStore';
import { StoreProvider } from 'store/helpers/storeContext';

// store
const rootStore = createStore();

const App = (): JSX.Element => {
  return (
    <StoreProvider value={rootStore}>
      <BrowserRouter>
        <GlobalStyles />
        <RouteView />
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;
