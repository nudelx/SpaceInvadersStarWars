import React, { Component } from 'react'
import Alien from './alien'
import { ALIENS } from '../constants/aliensConst'
import * as BOOM from '../sfx/boom.mp3'
import * as IMPRESSIVE from '../sfx/impressive.mp3'
import * as GAMEOVER from '../sfx/gameover.mp3'

class AlienStage extends Component {
  // state = { aliens: ALIENS, dead: {}, boom: {} }
  state = {
    aliens: ALIENS,
    dead: {},
    alienBoxTop: 0,
    alienBox: 0,
    stageMoveDelta: 10
  }

  componentDidMount() {
    console.log('AlienStage => done on mount ', this.refs.alienStage)
    const { offsetTop, offsetHeight } = this.refs.alienStage
    const position = {
      alienStageBottom: parseInt(offsetTop, 10) + parseInt(offsetHeight, 10),
      alienStageTop: offsetTop,
      alienHitCheck: this.alienHitCheck
    }
    this.props.setBoxState(position)
    this.timer = setInterval(() => this.moveStage(), 1000)
    const pos = this.refs.alienStage.getBoundingClientRect()

    this.setState(() => ({
      alienBox: pos.left,
      alienBoxTop: pos.top
    }))
  }

  moveStage() {
    console.log('SSSSSS', this.refs.alienStage.getBoundingClientRect())
    this.setState(state => ({
      alienBoxTop: state.alienBoxTop + state.stageMoveDelta
    }))
    setTimeout(() => this.checkOverflow(), 0)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.boom !== this.state.boom &&
      nextState.dead === this.state.dead
      ? false
      : true
  }

  stopTimer() {
    clearInterval(this.timer)
  }

  playGameOver() {
    const audio = new Audio(GAMEOVER)
    audio.play()
  }

  playImpressive() {
    const audio = new Audio(IMPRESSIVE)
    audio.play()
  }

  checkOverflow() {
    return Object.keys(this.refs).some(k => {
      const {
        [k]: { refs: alienRef }
      } = this.refs
      if (this.checkIfValidAlienRef(alienRef)) {
        const pos = alienRef.alien.getBoundingClientRect()
        if (pos.top + pos.height >= this.props.shipTop) {
          this.stopTimer()
          this.props.setBoxState({ gameOver: true })
          this.playGameOver()

          return true
        }
      }
      return false
    })
  }

  setToDead(alienId) {
    const { dead } = this.state
    dead[alienId] = dead[alienId] ? dead[alienId] + 1 : 1
    // boom[alienId] = boom[alienId] ? boom[alienId] + 1 : 1
    // this.setState(state => ({ dead: { ...dead }, boom: { ...boom } }))
    this.setState(
      state => ({ dead: { ...dead } }),
      () => {
        if (Object.keys(this.state.dead).length === this.state.aliens.length) {
          this.stopTimer()
          this.props.setBoxState({ gameDone: true })
          this.playImpressive()
        }
      }
    )
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
    return (
      (y > pos.top && y < pos.top + pos.height) ||
      (y + this.state.stageMoveDelta > pos.top &&
        y + this.state.stageMoveDelta < pos.top + pos.height)
    )
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

  playSound() {
    const fire = new Audio(BOOM)
    fire.play()
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
          this.playSound()
          return true // kill !
        }
      }
      return false
    })
  }

  render() {
    console.log('AlienStage', this.state)
    return (
      <div
        ref="alienStage"
        className="alien-stage"
        style={{ top: this.state.alienBoxTop ? this.state.alienBoxTop : '' }}
      >
        <div className="alien-box" ref={this.props.alienBox}>
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
