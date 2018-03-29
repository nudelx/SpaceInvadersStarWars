import React from 'react'
import Alien from './alien'
import { ALIENS } from '../constants/aliensConst'
// console.log(ALIENS)



const AlienStage = () => {
  console.log('AlienStage')
  return (
    <div className="alien-stage">
      <div className="alien-box">
          { ALIENS.map( (a, i) => <Alien key={i}/>)}
      </div>

    </div>
  )
}

export default AlienStage
