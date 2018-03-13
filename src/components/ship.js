import React from 'react'

const Ship = ({ x, y }) => {
  console.log('render ship')
  return (
    <div className="ship" style={{left:`${x}px`, bottom: `${y}px`}}></div>
  )
}

export default Ship
