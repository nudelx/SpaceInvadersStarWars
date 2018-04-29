import React, { Component } from 'react'

class GameBox extends Component {
    render() {
      const { children } = this.props
      return (children(...this.props))
    }
}


export default GameBox
