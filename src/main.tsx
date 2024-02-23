// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App'; // Your main App component
import store from './app/store.ts';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterConfig from './Routes/routes';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="https://dev-5vg1y1oem2av4knn.us.auth0.com"
      clientId="bOLUDV9STAibFWZ8tWnwbjSQ4k17GfZM"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Provider store={store}>
        <Router>
          <RouterConfig />
        </Router>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
