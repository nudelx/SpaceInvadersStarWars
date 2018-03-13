import React, { Component } from 'react'


export default class Bullet extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      stageHeight: props.stageHeight,
      yDelta: 10,
      ySpeed: 15,
      y: props.y,
      x: props.x
    }
  }

  moveBullet = () => this.setState({ y: this.state.y + this.state.yDelta}, this.calcIfRemove)

  calcIfRemove = () => {
    if (this.state.y > this.state.stageHeight) {
      clearInterval(this.timer)
      this.props.removeBulletFromStage(this.state.id)
    }
  }

  componentDidMount() {
    this.timer = setInterval(this.moveBullet, this.state.ySpeed)
  }

  render () {
    console.log('bullet render')
    const  { x, y } = this.state
    return (<div ref={'bullet'} className="bullet " style={{bottom: y, left:x }}></div>)
  }
}
