import React from 'react'
import Clouds from "./clouds"
import Twinkling from "./twinkling"
import Stars from "./stars"

const Background = ( ) => {
  return [
      <Clouds key={1}/>,
      <Twinkling key={2}/>,
      <Stars key={3} />
    ]
}

export default Background
