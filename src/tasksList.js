import React, { Component } from 'react';
import Task from './task';
import './tasksList.css';
const ListTitle = ({ title }) => (
  <div className="tasks-list-title">
    <h2>{title}</h2>
  </div>
);
const SearchList = ({ query, searchHanlder }) => (
  <input
    className="tasks-list-search"
    type="text"
    placeholder="Search for a task"
    value={query}
    onChange={searchHanlder}
  />
);
export default class TaksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      tasks: []
    };
  }
  componentDidMount() {
    const { tasks } = this.props;
    this.setState({
      tasks
    });
  }
  handleAddingTask() {
    let taskTitle = prompt('Please enter task title');
    let tasksCopy = this.state.tasks;
    if (taskTitle !== '' && taskTitle !== null) {
      this.setState({
        tasks: tasksCopy.concat({
          id: tasksCopy[tasksCopy.length - 1].id + 1,
          title: taskTitle,
          timer: { hours: 0, minutes: 0, seconds: 0 }
        })
      });
    }
  }
  handleSearch(e) {
    let filteredTasks = this.state.tasks.filter(task =>
      task.title.toLowerCase().match(e.target.value)
    );
    this.setState({
      query: e.target.value,
      tasks: e.target.value !== '' ? filteredTasks : this.props.tasks
    });
  }
  render() {
    const { id, title } = this.props;
    const { tasks, query } = this.state;
    return (
      <div className="tasks-list">
        <ListTitle title={title} />
        <SearchList
          query={query}
          searchHanlder={this.handleSearch.bind(this)}
        />
        {tasks.map(({ id, title, ...rest }) => (
          <Task key={id} title={title} {...rest} />
        ))}
        <div className="tasks-list-actions">
          <button onClick={this.handleAddingTask.bind(this, id)}>
            <i className="fas fa-plus-square" /> Add Task
          </button>
        </div>
      </div>
    );
  }
}
