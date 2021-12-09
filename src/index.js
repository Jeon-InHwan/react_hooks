import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2';
import UseTitle from './UseTitle';



ReactDOM.render(
  <React.StrictMode>
    <App />
    <UseTitle />
    <App2 />
  </React.StrictMode>,
  document.getElementById('root')
);
