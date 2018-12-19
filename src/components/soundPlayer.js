import React from 'react'
import * as BGM from '../sfx/bgm.mp3'

const SoundBGMControl = ({ playBGM, togglePlayBGM }) => (
  <div className="sound-bgm-control" onClick={togglePlayBGM}>
    {playBGM ? '🔈' : '🔇'}
  </div>
)

class SoundPlayer extends React.Component {
  state = { play: true }

  togglePlayBGM = () => this.setState(state => ({ play: !state.play }))

  componentDidMount() {
    var backgroundAudio = document.getElementById('bgm-audio')
    backgroundAudio.volume = 0.3
  }

  render() {
    return (
      <div>
        <SoundBGMControl
          togglePlayBGM={this.togglePlayBGM}
          playBGM={this.state.play}
        />
        {this.state.play ? (
          <audio id="bgm-audio" autoPlay={true} loop volume={0.2}>
            <source ref="bgm" src={BGM} type="audio/mpeg" />
          </audio>
        ) : null}
      </div>
    )
  }
}

export default SoundPlayer
