import React, { Component } from "react"
import "./App.css"
import "./aliens.css"
import Header from "./components/header"
import ShipStage from "./components/shipStage"
import AlienStage from "./components/alienStage"
import BackGroud from './components/background'
import GameBox from "./DCC/gameBox"

class App extends Component {
  render() {
    console.log("appppp")
    return (
      <div className="App">
        <Header />
        <BackGroud />
        <GameBox>
          {({ setBoxState, alienStageBottom, alienStageTop }) => [
            <AlienStage
              key="AlienStage"
              setBoxState={setBoxState}
            />,
            <ShipStage
              key="ShipStage"
              alienStageBottom={alienStageBottom}
              alienStageTop={alienStageTop}
            />
          ]}
        </GameBox>
      </div>
    )
  }
}

export default App
