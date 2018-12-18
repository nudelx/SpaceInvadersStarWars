import React, { Component } from 'react'

export default class Bullet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      stageHeight: props.stageHeight,
      yDelta: 50,
      ySpeed: 40,
      y: props.y,
      x: props.x
    }
  }

  moveBullet = () =>
    this.setState({ y: this.state.y - this.state.yDelta }, this.calcIfRemove)

  removeBullet() {
    clearInterval(this.timer)
    this.props.removeBulletFromStage(this.state.id)
  }

  hitCheck() {
    const { alienHitCheck } = this.props
    const { x, y, id } = this.state
    console.log('in area !!! bullet ' + this.state.id)
    alienHitCheck && alienHitCheck({ b_id: id, x, y })
  }

  checkIfBulletInAlienRange = () => {
    if (
      this.refs.bullet.offsetTop > this.props.alienStageTop &&
      this.refs.bullet.offsetTop < this.props.alienStageBottom
    ) {
      this.hitCheck()
    }
  }

  calcIfRemove = () => {
    this.checkIfBulletInAlienRange()
    if (this.state.y < 0) {
      this.removeBullet()
    }
  }

  componentDidMount() {
    this.timer = setInterval(this.moveBullet, this.state.ySpeed)
  }

  render() {
    console.log('bullet render', this)
    console.log('X', this.state.x)
    console.log('y', this.state.y)
    const { x, y } = this.state
    return (
      <div
        ref={'bullet'}
        className="bullet bullet-rotation"
        style={{ top: y, left: x }}
      />
    )
  }
}
