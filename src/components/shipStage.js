import React, { Component } from 'react'
import Bullet from './bullet'
import Ship from './ship'
import * as FIRE from '../sfx/fire.mp3'

export default class ShipStage extends Component {
  state = {
    step: 30,
    x: 200,
    y: 30,
    width: 64,
    height: 64,
    shipOffsetBottom: 30,
    bulletOffsetX: 22,
    bulletOffsetY: 5,
    bulletId: 0,
    map: {
      ArrowLeft: 'left',
      ArrowRight: 'right',
      Space: 'fire',
      Quote: 'right',
      KeyK:'fire',
      KeyS:'left',
      KeyG:'fire',

    },
    calcStep: {
      left: { axis: 'x', sign: -1 },
      right: { axis: 'x', sign: 1 }
    },
    bullets: []
  }

  updatePosition = e => {
    const { calcStep, x, step, map } = this.state
    const { [e.code]: mapName } = map
    if (mapName === 'fire') this.fireBullet()
    if (!calcStep[mapName]) return
    const {
      [mapName]: { sign }
    } = calcStep
    this.setState({ x: x + step * sign })
  }

  fireBullet = () => {
    const bulletId = this.state.bulletId + 1
    if (this.state.bullets.length > 10) return
    this.state.bullets.push({ id: bulletId })
    // this.setState({ bullets: this.state.bullets.concat({id: bulletId}), })
    this.setState({ bulletId: bulletId }) // mutation to avoid array loop in concat
    this.playFire()
  }

  playFire() {
    const fire = new Audio(FIRE)
    fire.play()
  }

  removeBulletFromStage = removeId =>
    this.setState({
      bullets: this.state.bullets.filter(b => b.id !== removeId)
    })

  componentDidMount() {
    const body = document.querySelector('body')
    body.addEventListener('keydown', this.updatePosition)
    // body.addEventListener("keyup", this.updatePosition)
    const stage = document.querySelector('div.ship-stage')
    this.setState(
      {
        stageWidth: stage.offsetWidth,
        stageHeight: stage.offsetHeight,
        y: stage.offsetHeight - this.state.height - this.state.shipOffsetBottom
      },
      () => this.props.setBoxState({ shipTop: this.state.y })
    )
  }

  render() {
    console.log('render ship stage', this.props)
    const {
      x,
      y,
      stageHeight,
      bullets,
      bulletOffsetX,
      bulletOffsetY
    } = this.state
    const { alienHitCheck, alienBoxRef } = this.props
    return (
      <div className="ship-stage">
        <Ship x={x} y={y} />
        {stageHeight &&
          bullets.map(b => (
            <Bullet
              id={b.id}
              key={b.id}
              x={x + bulletOffsetX}
              y={y + bulletOffsetY}
              // stageHeight={stageHeight}
              removeBulletFromStage={this.removeBulletFromStage}
              alienHitCheck={alienHitCheck}
              alienBoxRef={alienBoxRef}
            />
          ))}
      </div>
    )
  }
}
