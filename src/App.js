import React, { Component } from 'react';
import './App.css';
import hourglass from '../media/hourglass.gif'
import ReactCountdownClock from 'react-countdown-clock'
import WingCounter from './WingCounter'

class App extends Component {
  render() {
    return (
      <div className="center">
        <div className="Title">
          <img className="HourImg" src={hourglass}/>
          <h1>HourGlass</h1>
          <img className="HourImg" src={hourglass}/>
        </div>
        <div>
          <ReactCountdownClock
          seconds={60*30}
          color="#000"
          alpha={0.9}
          size={300}
          />
        </div>
        <div>
          <WingCounter spawnWing={this.spawnWing}/>
        </div>
      </div>
    );
  }
}

export default App;
