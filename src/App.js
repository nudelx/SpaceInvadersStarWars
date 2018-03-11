import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    step: 30,
    x: 200,
    map: {
      ArrowLeft: 'left',
      ArrowRight: 'right'
    },
    calcStep: {
      left: { axis: "x", sign: -1 },
      right: { axis: "x", sign: 1 },
    }
  }

  updatePosition = (e) => {
    const { calcStep, x, step, map } = this.state
    const { [e.code]: mapName } = map
    if (!calcStep[mapName]) return
    const { [mapName]: { sign } } = calcStep
    this.setState({ x: x + (step*sign)})
  }

  componentDidMount() {
    const body = document.querySelector("body")
    body.addEventListener("keydown", this.updatePosition)
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>

        <div className="stage">
          <div className="ship" style={{left:`${this.state.x}px`}}></div>
        </div>


      </div>
    );
  }
}

export default App;
