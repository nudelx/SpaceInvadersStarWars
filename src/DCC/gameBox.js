import React, { Component } from 'react'

class GameBox extends Component {


  render() {
    return (this.props.children(...this.props))
  }
}


export default GameBox
