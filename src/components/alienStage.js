import React, { Component } from 'react'
import Alien from './alien'
import { ALIENS } from '../constants/aliensConst'

class AlienStage extends Component {
  state = { aliens: ALIENS }
  componentDidMount () {
      console.log('AlienStage => done on mount ', this.refs.alienStage)
      const { offsetTop, offsetHeight} = this.refs.alienStage
      const position = {
        alienStageBottom: parseInt(offsetTop) + parseInt(offsetHeight),
        alienStageTop: offsetTop
      }
      this.props.setBoxState(position)
  }

  checkHit () {

  }

  render() {
    console.log('AlienStage')
    return (
      <div ref='alienStage' className="alien-stage">
        <div className="alien-box">
            { this.state.aliens.map( a => <Alien ref={a.alienId} key={a.alienId}/>)}
        </div>
      </div>
    )
  }
}


export default AlienStage
