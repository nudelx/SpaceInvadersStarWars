import React, { Component } from "react"
import "./App.css"
import "./aliens.css"
import Header from "./components/header"
import Clouds from "./components/clouds"
import Twinkling from "./components/twinkling"
import Stars from "./components/stars"
import ShipStage from "./components/shipStage"
import AlienStage from "./components/alienStage"
import GameBox from "./DCC/gameBox"

class App extends Component {
  state = {
    alienStageBottom: 0,
    alienStageTop: 0
  }

  setAppState = stateData => this.setState({ ...stateData })

  render() {
    console.log("appppp")
    const { alienStageBottom, alienStageTop } = this.state
    return (
      <div className="App">
        <Header />
        <Clouds />
        <Twinkling />
        <Stars />
        <GameBox>
          {props => [
            <AlienStage
              key="AlienStage"
              setAppState={this.setAppState}
              {...props}
            />,
            <ShipStage
              key="ShipStage"
              alienStageBottom={alienStageBottom}
              alienStageTop={alienStageTop}
              {...props}
            />
          ]}
        </GameBox>
      </div>
    )
  }
}

export default App
