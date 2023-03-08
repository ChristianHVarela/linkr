import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Reset from './reset';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Reset />
    <App />
  </React.StrictMode>
);