import React, { Component } from 'react'

export default class Alien extends Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { setToBoomed, shouldBoom, alienId } = this.props
    if (shouldBoom) {
      setTimeout(() => setToBoomed(alienId, 42), 30)
    }
  }

  render() {
    const { alienId, dead, shouldBoom } = this.props
    console.log('Alien render', dead)
    return (
      <div
        id={alienId}
        ref={'alien'}
        className={`alien alien-green ${
          shouldBoom ? 'boom' : dead ? 'dead' : ''
        }`}
      />
    )
  }
}
