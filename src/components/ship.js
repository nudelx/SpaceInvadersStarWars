import React from 'react'

const Ship = ({ x, y }) => {
  console.log('render ship')
  return <div className="ship" style={{ left: `${x}px`, top: `${y}px` }} />
}

export default Ship
