import React, { Component } from 'react';
import './App.css';
import './aliens.css';
import Header from './components/header'
import Clouds from './components/clouds'
import Twinkling from './components/twinkling'
import Stars from './components/stars'
import GameBox from './components/gamebox'
import AlienStage from './components/alienStage'
const aliens = [1,2,3,4,5,6,7,8,9,10,1,12,13,14,15,16,17,18,19,20]

class App extends Component {

  render() {
    console.log('appppp')
    return (
      <div className="App">
        <Header />
        <Clouds />
        <Twinkling />
        <Stars />
        <AlienStage aliens={aliens}/>
        <GameBox aliens={aliens}/>
      </div>
    );
  }
}

export default App;
