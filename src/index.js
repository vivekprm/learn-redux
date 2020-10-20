import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import allReducer from "./reducers";
import { createStore } from 'redux';

const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
