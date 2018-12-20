import React, { Component } from 'react'
import Message from '../components/messageBox'
import * as PLAY from '../sfx/play.mp3'

class GameBox extends Component {
  state = {
    alienStageBottom: 0,
    alienStageTop: 0,
    shipTop: 0,
    gameOver: false,
    gameDone: false
  }

  gameOverTxt = 'Game Over!'
  nextLevelTxt = 'Impressive !'

  setBoxState = stateData => this.setState({ ...stateData })

  startGame = () => this.setState(state => ({ gameOver: false }))

  nextLevel = () => this.setState(state => ({ gameDone: false }))

  playSound() {
    const sound = new Audio(PLAY)
    sound.volume = 0.3
    sound.play()
  }

  render() {
    console.log('gameBox')
    const { children } = this.props
    const { gameOver, gameDone } = this.state
    return gameOver || gameDone ? (
      <Message
        message={gameOver ? this.gameOverTxt : this.nextLevelTxt}
        onclick={gameOver ? this.startGame : this.nextLevel}
        buttonText={gameOver ? 'Restart' : 'Next'}
      />
    ) : (
      this.playSound() ||
        children({ setBoxState: this.setBoxState, ...this.state })
    )
  }
}

export default GameBox
