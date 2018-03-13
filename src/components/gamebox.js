import React, { Component } from 'react'
import Bullet from './bullet'
import Stage from './stage'
import Ship from './ship'

export default class GameBox extends Component {

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
    this.setState({ bullets: this.state.bullets.concat({id: bulletId}), bulletId: bulletId })
  }

  removeBulletFromStage = (removeId) => this.setState({ bullets: this.state.bullets.filter(b => b.id !== removeId)})

  componentDidMount() {
    const body = document.querySelector("body")
    body.addEventListener("keydown", this.updatePosition)
    // body.addEventListener("keyup", this.updatePosition)
    const stage = document.querySelector('div.stage')
    this.setState({ stageWidth: stage.offsetWidth, stageHeight: stage.offsetHeight})
  }

  render() {
    console.log('game box')
    const { x, y, stageHeight, bullets } = this.state
    return (
      <Stage>
        <Ship x={x} y={y}/>
        {stageHeight && bullets.map( b => <Bullet id={b.id} key={b.id} x={x+22} y={y} stageHeight={stageHeight} removeBulletFromStage={this.removeBulletFromStage} />)}
      </Stage>
    )
  }

}
