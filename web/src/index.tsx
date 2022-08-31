import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { reportWebVitals } from './reportWebVitals';

import './index.css';
import { REPO_CONTEXT_PROVIDER } from './ReposContext';

ReactDOM.render(
  <React.StrictMode>
    <REPO_CONTEXT_PROVIDER>
      <App />
    </REPO_CONTEXT_PROVIDER>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
