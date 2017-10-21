import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './App.css';
import Header from './components/header';
import Navigation from './components/navigation';
import Guild from './containers/guild';
import Members from './containers/member';
import Upgrades from './containers/upgrade';
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
      <Header />
      <Navigation />
      <Switch>
        <Route exact path='/' component={Guild} />
        <Route path='/members' component={Members} />
        <Route path='/upgrades' component={Upgrades} />
      </Switch>
    </div>
  </Provider>
);

export default App;
