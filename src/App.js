import React, { Component } from 'react';
import './App.css';
import MainContainer from './containers/maincontainer'
class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Welcome to my Hangman</h1>
          <MainContainer />
      </div>
    );
  }
}

export default App;
