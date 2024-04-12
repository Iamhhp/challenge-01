import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import PLP from './pages/PLP/PLP';
import { Provider } from 'react-redux';
import dataStore from './context/dataStore';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={dataStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
