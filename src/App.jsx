import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './App.css';
import Header from './components/header';
import Navigation from './components/navigation';
import GuildPage from './containers/guild';
import MemberPage from './containers/member';
import UpgradePage from './containers/upgrade';
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
        <Route exact path='/' component={GuildPage} />
        <Route path='/members' component={MemberPage} />
        <Route path='/upgrades' component={UpgradePage} />
      </Switch>
    </div>
  </Provider>
);

export default App;
