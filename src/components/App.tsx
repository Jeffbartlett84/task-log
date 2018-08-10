import * as moment from 'moment';
import * as React from 'react';
import TaskList from '../components/task-list';

let id = 0;

class App extends React.Component {
  // public state = {
  //   openTasks: [{
  //     completed: false,
  //     completedDate: '',
  //     id: 0,
  //     important: true,
  //     isEditing: false,
  //     lastUpdated: moment().format('MM/DD/YYYY'),
  //     notes: 'react seems pretty cool',
  //     title: 'finish the task component',
  //   }],
  //   task: '',
  // }

  public render() {
    return (
      <div className="App">
        <TaskList 
          openTasks={this.state.openTasks} 
          addNewTask={this.addNewTask}
          setTask={this.setTask}
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
      completed: false,
      completedDate: '',
      id,
      important: false,
      isEditing: false,
      lastUpdated: moment().format('MM/DD/YYYY'),
      notes: '',
      title: newTaskTitle,
    });

    this.setState({openTasks: openTasksCopy});
    this.clearTaskInput();
  }

  private setTask = (task) => {
    const { openTasks } = this.state;
    let openTasksCopy;
    openTasksCopy = openTasks.slice(0);
    const newTaskIndex = this.findTask(task.id);
    openTasksCopy[newTaskIndex] = task;
    this.setState({ openTasks: openTasksCopy });    
  }

  private findTask = (taskId: number): number => {
    const { openTasks } = this.state;
    let openTasksCopy;
    openTasksCopy = openTasks.slice(0);
    return openTasks.indexOf(openTasksCopy.find((task)=> {
     return task.id === taskId;
    }));
  }
}

export default App;
