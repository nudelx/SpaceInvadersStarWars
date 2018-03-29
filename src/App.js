import React, { Component } from 'react';
import './App.css';
import './aliens.css';
import Header from './components/header'
import Clouds from './components/clouds'
import Twinkling from './components/twinkling'
import Stars from './components/stars'
import ShipStage from './components/shipStage'
import AlienStage from './components/alienStage'
import GameBox from './DCC/gameBox'

class App extends Component {

  render() {
    console.log('appppp')
    return (
      <div className="App">
        <Header />
        <Clouds />
        <Twinkling />
        <Stars />
        <GameBox>
          {
            (props) => [
              <AlienStage {...props}/>,
              <ShipStage {...props} />
            ]
          }
        </GameBox>
      </div>
    );
  }
}

export default App;
