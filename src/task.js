import React, { Component } from 'react';
import TaskTimer from './taskTimer';
import './task.css';
const TaskTitle = ({ title }) => (
  <div className="task-title">
    <h4>{title}</h4>
  </div>
);
export default class Task extends Component {
  render() {
    const { title, ...timer } = this.props;
    return (
      <div className="task-item">
        <TaskTitle title={title} />
        <TaskTimer {...timer} />
      </div>
    );
  }
}
