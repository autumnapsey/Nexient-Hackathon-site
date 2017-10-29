import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Navigation from './components/navigation';
import GuildPage from './components/guild';
import MemberPage from './components/members';
import UpgradePage from './components/upgradesList';
import configureStore from './store/configureStore';

const store = configureStore();

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
