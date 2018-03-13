import React, { Component } from 'react'
import Bullet from './bullet'
import Ship from './ship'

export default class ShipStage extends Component {

  state = {
    step: 30,
    x: 200,
    y: 30,
    bulletId: 0,
    map: {
      ArrowLeft: 'left',
      ArrowRight: 'right',
      Space: 'fire'
    },
    calcStep: {
      left: { axis: "x", sign: -1 },
      right: { axis: "x", sign: 1 },
    },
    bullets: []
  }

  updatePosition = (e) => {
    const { calcStep, x, step, map } = this.state
    const { [e.code]: mapName } = map
    if (mapName === 'fire') this.fireBullet()
    if (!calcStep[mapName]) return
    const { [mapName]: { sign } } = calcStep
    this.setState({ x: x + (step*sign)})
  }

  fireBullet = () => {
    const bulletId = this.state.bulletId + 1
    if (this.state.bullets.length > 10 ) return
    this.state.bullets.push({id: bulletId})
    // this.setState({ bullets: this.state.bullets.concat({id: bulletId}), })
    this.setState({  bulletId: bulletId })  // mutation to avoid array loop in concat
  }

  removeBulletFromStage = (removeId) => this.setState({ bullets: this.state.bullets.filter(b => b.id !== removeId)})

  componentDidMount() {
    const body = document.querySelector("body")
    body.addEventListener("keydown", this.updatePosition)
    // body.addEventListener("keyup", this.updatePosition)
    const stage = document.querySelector('div.ship-stage')
    this.setState({ stageWidth: stage.offsetWidth, stageHeight: stage.offsetHeight})
  }

  render() {
    console.log('game box')
    const { x, y, stageHeight, bullets } = this.state
    return (
      <div className='ship-stage'>
        <Ship x={x} y={y}/>
        {stageHeight && bullets.map( b => <Bullet id={b.id} key={b.id} x={x+22} y={y+5} stageHeight={stageHeight} removeBulletFromStage={this.removeBulletFromStage} />)}
      </div>
    )
  }

}
