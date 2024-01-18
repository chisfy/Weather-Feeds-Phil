import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.tsx';
import { LocationProvider } from './context/locationbuttoncontext.tsx';

ReactDOM.render(
  <React.StrictMode>
    <LocationProvider>
    <App />
    </LocationProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
