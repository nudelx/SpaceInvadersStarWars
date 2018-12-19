import React, { Component, Fragment } from 'react'
import './App.css'
import './aliens.css'
import Header from './components/header'
import ShipStage from './components/shipStage'
import AlienStage from './components/alienStage'
import BackGround from './components/background'
import GameBox from './DCC/gameBox'
import SoundPlayer from './components/soundPlayer'

class App extends Component {
  render() {
    console.log('APP', this)
    return (
      <div className="App">
        <Header />
        <BackGround />
        <SoundPlayer />
        <GameBox>
          {({
            setBoxState,
            alienStageBottom,
            alienStageTop,
            alienHitCheck
          }) => (
            <Fragment>
              <AlienStage key="AlienStage" setBoxState={setBoxState} />
              <ShipStage
                key="ShipStage"
                alienStageBottom={alienStageBottom}
                alienStageTop={alienStageTop}
                alienHitCheck={alienHitCheck}
              />
            </Fragment>
          )}
        </GameBox>
      </div>
    )
  }
}

export default App
