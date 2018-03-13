import React from 'react'
import Alien from './alien'



const AlienStage = ({ aliens }) => {
  console.log('AlienStage')
  return (
    <div className="alien-stage">
      <div className="alien-box">
          { aliens.map( (a, i) => <Alien key={i}/>)}
      </div>

    </div>
  )
}

export default AlienStage
