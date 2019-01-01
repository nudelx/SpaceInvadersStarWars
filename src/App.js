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
  constructor(props) {
    super(props)
    this.alienBoxRef = React.createRef()
  }

  render() {
    console.log('APP', this)

    return (
      <div className="App">
        <Header />
        <BackGround />
        <SoundPlayer />
        <GameBox>
          {({ setBoxState, alienHitCheck, shipTop }) => (
            <Fragment>
              <AlienStage
                key="AlienStage"
                setBoxState={setBoxState}
                alienBox={el => (this.alienBoxRef = el)}
                shipTop={shipTop}
              />
              <ShipStage
                key="ShipStage"
                alienHitCheck={alienHitCheck}
                alienBoxRef={this.alienBoxRef}
                setBoxState={setBoxState}
              />
            </Fragment>
          )}
        </GameBox>
      </div>
    )
  }
}

export default App
