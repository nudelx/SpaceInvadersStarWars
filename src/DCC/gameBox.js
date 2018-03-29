import React from 'react'

const GameBox = ({ children , ...props}) => {
  return (children(...props))
}


export default GameBox
