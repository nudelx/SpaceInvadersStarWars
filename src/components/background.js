import React from 'react'
import Clouds from './clouds'
import Twinkling from './twinkling'
import Stars from './stars'

const Background = () => {
  return (
    <React.Fragment>
      <Clouds key={1} />,
      <Twinkling key={2} />,
      <Stars key={3} />
    </React.Fragment>
  )
}

export default Background
