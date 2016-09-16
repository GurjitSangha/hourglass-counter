import React, { Component } from 'react';
import './App.css';
import wing from '../media/fried.png'

class WingCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wingCounter: 0
    }
    this.incrementer = this.incrementer.bind(this)
  }
  incrementer() {
    this.setState({
      wingCounter: this.state.wingCounter+1
    })
    console.log(this.state.wingCounter++);
  }
  render() {
    return (
      <div className="center">
      <div className="Title">
        <p>{this.state.wingCounter}</p>
        <img className="WingImg" src={wing} />
      </div>
      <div>
        <button type="button" onClick={this.incrementer}>+</button>
      </div>
      </div>
    );
  }
}

export default WingCounter;
