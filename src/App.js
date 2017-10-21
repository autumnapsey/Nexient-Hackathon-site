import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Navigation from './components/navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
