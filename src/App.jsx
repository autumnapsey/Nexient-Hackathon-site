import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './App.css';
import Header from './components/header';
import guild from './reducers/guild';

function logger({ getState }) {
  return next => action => {
    console.log('will dispatch', action);
    let returnValue = next(action);
    console.log('state after dispatch', getState());
    return returnValue;
  };
};

const store = createStore(
  guild,
  applyMiddleware(logger, thunk)
);

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Header></Header>
      <div className="App-intro">
      </div>
    </div>
  </Provider>
);

export default App;
