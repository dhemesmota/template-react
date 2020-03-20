import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './config/ReactotronConfig';
import Routes from './routes';
import store from './store';
import GlobalStyles from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyles />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes />
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
