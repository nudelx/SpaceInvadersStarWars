import React, { Component } from 'react'

export default class Alien extends Component {
  state = {
    shouldBoom: false,
    boom: false
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.visible === this.state.visible &&
      nextState.shouldBoom !== this.state.shouldBoom
      ? false
      : true
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { setToBoomed, shouldBoom, alienId } = this.props
    if (shouldBoom && !this.state.shouldBoom) {
      // console.log('BOOOOOOM', this.state, this.props)
      this.setState(
        state => ({ shouldBoom, boom: true }),
        () => setTimeout(() => this.setState(state => ({ boom: false })), 50)
      )
      // setTimeout(() => setToBoomed(alienId, 42), 30)
      //
    }
  }

  render() {
    const { alienId, dead, shouldBoom } = this.props
    console.log('Alien render', dead)
    console.log('Alien render', this.state)
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
