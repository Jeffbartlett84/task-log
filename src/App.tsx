import * as React from 'react';
import './App.css';
import TaskList from './components/task-list'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <TaskList currentTask='' openTasks={[]} />
      </div>
    );
  }
}

export default App;
