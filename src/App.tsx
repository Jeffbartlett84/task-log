import * as React from 'react';
import './App.css';
import TaskList from './components/task-list'

const id = 0;

class App extends React.Component {
  public state = {
    openTasks: [{title: 'finish this app', id}],
    task: '',
  }
  public render() {
    return (
      <div className="App">
        <TaskList task={this.state.task} openTasks={this.state.openTasks} />
      </div>
    );
  }
}

export default App;
