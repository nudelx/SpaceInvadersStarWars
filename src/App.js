import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Clouds from './components/clouds'
import Twinkling from './components/twinkling'
import Stars from './components/stars'
import GameBox from './components/gamebox'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Clouds />
        <Twinkling />
        <Stars />
        <GameBox/>
      </div>
    );
  }
}

export default App;
