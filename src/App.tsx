import * as React from 'react';
import './App.css';
import TaskList from './components/task-list'

let id = 0;

class App extends React.Component {
  public state = {
    openTasks: [{id, title: 'finish this app'}],
    task: '',
  }

  public render() {
    return (
      <div className="App">
        <TaskList 
          openTasks={this.state.openTasks} 
          addNewTask={this.addNewTask}
          clearTaskInput={this.clearTaskInput} 
          onTaskChange={this.onTaskChange} 
          currentTask={this.state.task}
        />
      </div>
    );
  }

  private clearTaskInput = () => {
    this.setState({task: ''});
  }

  private onTaskChange = (e) => {
    e.preventDefault();
    this.setState({task: e.target.value});
  }

  private addNewTask = (newTaskTitle: string) => {
    const { openTasks } = this.state;
    id ++;
    let openTasksCopy;
    openTasksCopy = openTasks.slice(0);
    openTasksCopy.push({
      id,
      title: newTaskTitle,
    });

    this.setState({openTasks: openTasksCopy});
    this.clearTaskInput();
  }
}

export default App;
