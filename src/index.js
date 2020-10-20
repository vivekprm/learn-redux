import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';

// STORE -> Globalized State
// Action -> INCREMENT: simple function return object.
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}
const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}
// Reducer -> Based on the action it modifies the state.
const counter = (state=0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;  
  }
}

let store = createStore(counter);

// Display it in console
store.subscribe(() => console.log(store.getState()));

// Dipatch -> Send action to reducer
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
