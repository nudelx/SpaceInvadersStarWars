import React, { Component } from 'react'
import Alien from './alien'
import { ALIENS } from '../constants/aliensConst'

class AlienStage extends Component {
  state = { aliens: ALIENS }
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

  checkByX(alienRef, x) {
    const pos = alienRef.alien.getBoundingClientRect()
    return x > pos.left && x < pos.left + pos.width
    // return (
    //   alienRef &&
    //   alienRef.alien.offsetLeft + alienRef.alien.offsetParent.offsetLeft < x &&
    //   x <
    //     alienRef.alien.offsetLeft +
    //       alienRef.alien.offsetParent.offsetLeft +
    //       alienRef.alien.offsetWidth
    // )
  }

  checkByY(alienRef, y) {
    const pos = alienRef.alien.getBoundingClientRect()
    return y > pos.top && y < pos.top + pos.height
    // return (
    //   alienRef &&
    //   alienRef.alien.offsetTop +
    //     alienRef.alien.offsetParent.offsetParent.offsetTop <
    //     y &&
    //   y <
    //     alienRef.alien.offsetTop +
    //       alienRef.alien.offsetParent.offsetParent.offsetTop +
    //       alienRef.alien.offsetHeight
    // )
  }

  alienHitCheck = props => {
    const { b_id, x, y } = props
    const { refs } = this
    console.log('in CHEKC', y)
    Object.keys(refs).forEach(k => {
      const {
        [k]: { refs: alienRef }
      } = refs
      // console.log(alienRef)
      console.log('x', x)
      console.log('y', y)
      if (alienRef && this.checkByX(alienRef, x)) {
        console.log('da X HIT !!!!', alienRef)
        if (this.checkByY(alienRef, y)) {
          console.log('KILLL')
          debugger
        }
      }
    })
  }

  render() {
    console.log('AlienStage')
    return (
      <div ref="alienStage" className="alien-stage">
        <div className="alien-box">
          {this.state.aliens.map(a => (
            <Alien ref={a.alienId} key={a.alienId} />
          ))}
        </div>
      </div>
    )
  }
}

export default AlienStage
