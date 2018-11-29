import React, { Component } from 'react';
import './taskTimer.css';
export default class TaskTimer extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
  componentDidMount() {
    const { hours, minutes, seconds } = this.props.timer;
    this.setState({
      hours,
      minutes,
      seconds
    });
  }
  pad(digit) {
    if (digit <= 9) return '0' + digit;
    return digit;
  }
  tick() {
    let stateCopy = {
      ...this.state
    };
    this.setState({
      seconds: ++stateCopy.seconds
    });
    if (this.state.seconds >= 60) {
      this.setState({ seconds: 0, minutes: ++stateCopy.minutes });
      if (this.state.minutes >= 60) {
        this.setState({ minutes: 0, hours: ++stateCopy.hours });
      }
    }
  }

  handleTimerStart() {
    if (this.timer == null) {
      this.timer = setInterval(() => {
        this.tick();
      }, 1000);
    }
  }
  handleTimerStop() {
    clearInterval(this.timer);
    this.timer = null;
  }
  handleTimerClear() {
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0
    });
    this.handleTimerStop();
  }
  render() {
    const { hours, minutes, seconds } = this.state;
    return (
      <div className="task-timer">
        <div className="task-timer-counter">
          <span>{this.pad(hours)} : </span>
          <span>{this.pad(minutes)} : </span>
          <span>{this.pad(seconds)}</span>
        </div>
        <div className="task-timer-actions">
          <button className="start" onClick={this.handleTimerStart.bind(this)}>
            <i className="fas fa-play" />
          </button>
          <button className="stop" onClick={this.handleTimerStop.bind(this)}>
            <i className="fas fa-pause" />
          </button>
          <button className="clear" onClick={this.handleTimerClear.bind(this)}>
            <i className="fas fa-stop" />
          </button>
        </div>
      </div>
    );
  }
}
