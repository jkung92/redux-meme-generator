import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const INITIAL_STATE = { memes: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_MEME':
      return { ...state, memes: [...state.memes, action.payload] };
    case 'DELETE_MEME':
      const newMemeList = state.memes.filter(
        meme => meme.id !== action.payload.id
      );
      return { ...state, memes: newMemeList };

    default:
      return state;
  }
}
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
