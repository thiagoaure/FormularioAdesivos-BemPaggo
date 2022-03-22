import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RouteComponent from './routes';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <RouteComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
