import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';
import Routes from './routes';
import store from './store';
import GlobalStyles from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes />
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
