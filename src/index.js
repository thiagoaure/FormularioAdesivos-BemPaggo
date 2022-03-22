import React from 'react';
import ReactDOM from 'react-dom';
import SSRProvider from 'react-bootstrap/SSRProvider';
import RouteComponent from './routes';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <SSRProvider>
      <RouteComponent/>
    </SSRProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
