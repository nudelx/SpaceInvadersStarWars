import React, { Component } from "react"

export default class Bullet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      stageHeight: props.stageHeight,
      yDelta: 50,
      ySpeed: 300,
      y: props.y,
      x: props.x
    }
  }

  moveBullet = () => this.setState({ y: this.state.y + this.state.yDelta }, this.calcIfRemove)

  removeBullet() {
    clearInterval(this.timer)
    this.props.removeBulletFromStage(this.state.id)
  }

  hitCheck = () => {
    console.log('in area !!!')
  }

  checkIfBulletInAlienRange = () => {
    if ( this.refs.bullet.offsetTop > this.props.alienStageTop && this.refs.bullet.offsetTop < this.props.alienStageBottom ) {
      this.hitCheck()
    }
  }

  calcIfRemove = () => {
    this.checkIfBulletInAlienRange()
    if (this.state.y > this.state.stageHeight) { this.removeBullet() }
  }

  componentDidMount() {
    this.timer = setInterval(this.moveBullet, this.state.ySpeed)
  }

  render() {
    console.log("bullet render")
    const { x, y } = this.state
    return (
      <div
        ref={"bullet"}
        className="bullet bulet-rotation"
        style={{ bottom: y, left: x }}
      />
    )
  }
}
