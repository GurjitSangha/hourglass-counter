import React, { Component } from 'react';
import './App.css';
import wing from '../media/fried.png';

class WingCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wingCounter: 0,
      wingStyles: []
    }
    this.spawnWing = this.spawnWing.bind(this);
    this.incrementer = this.incrementer.bind(this)
  }

  spawnWing() {
    const rTop = Math.random() * window.innerHeight;
    const rLeft = Math.random() * window.innerWidth;
    const style = {
      position: 'absolute',
      left: `${rLeft}px`,
      top: `${rTop}px`
    };
    this.setState({
      wingStyles: this.state.wingStyles.concat([style])
    })
  }

  incrementer() {
    this.setState({
      wingCounter: this.state.wingCounter+1
    })
    this.spawnWing();
  }

  render() {
    return (
      <div>
        {
          this.state.wingStyles.map((wingStyle, i) => {
            return <img src={wing} key={i} style={wingStyle} className='spawn-chicken'/>
          })
        }
        <div className="center">
          <div className="Title">
            <p>{this.state.wingCounter}</p>
            <img className="WingImg" src={wing} />
          </div>
          <div>
            <button type="button" onClick={this.incrementer}>+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default WingCounter;
