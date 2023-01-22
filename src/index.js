import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/elements/App/App';
import './global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
