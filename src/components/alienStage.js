import React, { Component } from 'react'
import Alien from './alien'
import { ALIENS } from '../constants/aliensConst'

class AlienStage extends Component {

  componentDidMount () {
      console.log('AlienStage => done on mount ', this.refs.alienStage)
      const { offsetTop, offsetHeight} = this.refs.alienStage
      const position = {
        alienStageBottom: parseInt(offsetTop) + parseInt(offsetHeight),
        alienStageTop: offsetTop
      }
      this.props.setAppState(position)
  }


  render() {
    console.log('AlienStage')
    return (
      <div ref='alienStage' className="alien-stage">
        <div className="alien-box">
            { ALIENS.map( (a, i) => <Alien key={i}/>)}
        </div>

      </div>
    )
  }
}


export default AlienStage
