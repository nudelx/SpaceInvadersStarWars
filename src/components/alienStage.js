import React, { Component } from 'react'
import Alien from './alien'
import { ALIENS } from '../constants/aliensConst'

class AlienStage extends Component {
  // state = { aliens: ALIENS, dead: {}, boom: {} }
  state = { aliens: ALIENS, dead: {} }
  componentDidMount() {
    console.log('AlienStage => done on mount ', this.refs.alienStage)
    const { offsetTop, offsetHeight } = this.refs.alienStage
    const position = {
      alienStageBottom: parseInt(offsetTop, 10) + parseInt(offsetHeight, 10),
      alienStageTop: offsetTop,
      alienHitCheck: this.alienHitCheck
    }
    this.props.setBoxState(position)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.boom !== this.state.boom &&
      nextState.dead === this.state.dead
      ? false
      : true
  }

  setToDead(alienId) {
    const { dead, boom } = this.state
    dead[alienId] = dead[alienId] ? dead[alienId] + 1 : 1
    // boom[alienId] = boom[alienId] ? boom[alienId] + 1 : 1
    // this.setState(state => ({ dead: { ...dead }, boom: { ...boom } }))
    this.setState(state => ({ dead: { ...dead } }))
  }

  // setToBoomed = (alienId, value) => {
  //   const { boom } = this.state
  //   boom[alienId] = boom[alienId] ? boom[alienId] + 1 : 1
  //   this.setState(state => ({ boom: { ...boom } }))
  // }

  checkByX(alienRef, x) {
    const pos = alienRef.alien.getBoundingClientRect()
    return x > pos.left && x < pos.left + pos.width
  }

  checkByY(alienRef, y) {
    const pos = alienRef.alien.getBoundingClientRect()
    return y > pos.top && y < pos.top + pos.height
  }

  killAlien(alienId) {
    this.state.aliens.forEach(item => {
      if (item.alienId === alienId) {
        this.setToDead(alienId)
      }
      return item
    })

    // this.setState(state => ({ aliens }))
  }

  checkIfValidAlienRef(alienRef) {
    return (
      alienRef && alienRef.alien && !this.state.dead[alienRef.alien.id]
      // alienRef.alien.getAttribute('rel') !== 'dead'
    )
  }

  alienHitCheck = props => {
    const { x, y } = props
    const { refs } = this
    return Object.keys(refs).some(k => {
      const {
        [k]: { refs: alienRef }
      } = refs
      if (this.checkIfValidAlienRef(alienRef) && this.checkByX(alienRef, x)) {
        if (this.checkByY(alienRef, y)) {
          this.killAlien(alienRef.alien.id)
          return true // kill !
        }
      }
      return false
    })
  }

  render() {
    console.log('AlienStage', this.state)
    return (
      <div ref="alienStage" className="alien-stage">
        <div className="alien-box">
          {this.state.aliens.map(a => (
            <Alien
              ref={a.alienId}
              dead={this.state.dead[a.alienId]}
              key={a.alienId}
              alienId={a.alienId}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default AlienStage
