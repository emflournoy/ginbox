import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Toolbar from './components/Toolbar'
import Compose from './components/Compose';
import MessageList from './components/MessageList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
          <Toolbar />
          </div>
          <Compose />
          <MessageList />
        </div>
      </div>
    );
  }
}

export default App;
