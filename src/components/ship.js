import React from 'react'

const Ship = ({ x, y }) => {
  return (
    <div className="ship" style={{left:`${x}px`, bottom: `${y}px`}}></div>
  )
}

export default Ship
