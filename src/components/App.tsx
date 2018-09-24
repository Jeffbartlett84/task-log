import * as React from 'react';
import { connect } from 'react-redux';
import TaskList from './task-list';
// import { bindActionCreators } from 'redux';
// import * as actionCreators from './actionCreators';
export interface IProps {
  allTasks: any;
}

const mapStateToProps = (state) => {
  return {
    allTasks: state.tasks.allTasks,
  }
}

class App extends React.Component<IProps> {

  public render() {
    return (
      <div className="App">
      <TaskList 
          // newTask={'stuff'}
          openTasks={this.props.allTasks}
      />
      <h1>oh hai mark</h1>

      </div>
    );
  }

  // private clearTaskInput = () => {
  //   this.setState({task: ''});
  // }

  // private onTaskChange = (e) => {
  //   e.preventDefault();
  //   this.setState({task: e.target.value});
  // }

  // private addNewTask = (newTaskTitle: string) => {
  //   const { openTasks } = this.state;
  //   id ++;
  //   let openTasksCopy;
  //   openTasksCopy = openTasks.slice(0);
  //   openTasksCopy.push({
  //     completed: false,
  //     completedDate: '',
  //     id,
  //     important: false,
  //     isEditing: false,
  //     lastUpdated: moment().format('MM/DD/YYYY'),
  //     notes: '',
  //     title: newTaskTitle,
  //   });

  //   this.setState({openTasks: openTasksCopy});
  //   this.clearTaskInput();
  // }

  // private setTask = (task) => {
  //   const { openTasks } = this.state;
  //   let openTasksCopy;
  //   openTasksCopy = openTasks.slice(0);
  //   const newTaskIndex = this.findTask(task.id);
  //   openTasksCopy[newTaskIndex] = task;
  //   this.setState({ openTasks: openTasksCopy });    
  // }

  // private findTask = (taskId: number): number => {
  //   const { openTasks } = this.state;
  //   let openTasksCopy;
  //   openTasksCopy = openTasks.slice(0);
  //   return openTasks.indexOf(openTasksCopy.find((task)=> {
  //    return task.id === taskId;
  //   }));
  // }
}

export default connect(mapStateToProps)(App);
