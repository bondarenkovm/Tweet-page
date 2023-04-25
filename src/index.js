import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from 'components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="tweet-page">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
