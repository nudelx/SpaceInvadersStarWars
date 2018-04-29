import React, { Component } from "react"

class GameBox extends Component {
  state = {
    alienStageBottom: 0,
    alienStageTop: 0
  }

  setBoxState = stateData => this.setState({ ...stateData })

  render() {
    console.log('gameBox')
    const { children } = this.props
    return children({ setBoxState: this.setBoxState, ...this.state })
  }
}

export default GameBox
