import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    step: 10,
    x: 200,
    calcStep: {
      KeyJ: { axis: "x", sign: -1 },
      KeyL: { axis: "x", sign: 1 },
    }
  }

  updatePosition = (e) => {
    const { calcStep, x, step } = this.state
    if (!calcStep[e.code]) return
    const { [e.code]: { sign } } = calcStep
    this.setState({ x: x + (step*sign)})
  }

  componentDidMount() {
    const body = document.querySelector("body")
    body.addEventListener("keypress", this.updatePosition)
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
