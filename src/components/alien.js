import React, { Component } from 'react'

export default class Alien extends Component {
  render() {
    return (
      <div ref={'alien'} className="alien alien-green"></div>
    )
  }
}
