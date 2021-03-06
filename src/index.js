import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '@csstools/normalize.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './fonts.css';
import './base.css';
import App from './App';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,

  document.querySelector('#root'),
);
