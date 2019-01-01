import React, { Component } from 'react'

export default class Alien extends Component {
  state = {
    dead: false,
    boom: false
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { dead } = this.props
    if (dead && !this.state.dead) {
      this.setState(
        state => ({ dead, boom: true }),
        () => setTimeout(() => this.setState(state => ({ boom: false })), 60)
      )
    }
  }

  render() {
    const { alienId, dead } = this.props
    return (
      <div
        id={alienId}
        ref={'alien'}
        className={`alien alien-green ${
          this.state.boom ? 'boom' : dead ? 'dead' : ''
        }`}
      />
    )
  }
}
