import React, { Component } from 'react';
import './App.css';
import Game from './containers/Game'


class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Welcome to my Hangman</h1>
          <Game />
      </div>
    );
  }
}

export default App;
