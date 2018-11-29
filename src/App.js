import React, { Component } from 'react';
import Header from './header';
import TasksList from './tasksList';
import ListsService from './listsService';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: []
    };
  }
  componentDidMount() {
    ListsService.getAll().then(res => {
      this.setState({
        lists: res
      });
    });
  }
  render() {
    const { lists } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="app-container">
          {lists.map(list => (
            <TasksList
              key={list.id}
              id={list.id}
              title={list.title}
              tasks={list.tasks}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
