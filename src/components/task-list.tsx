import * as React from 'react';

export interface IProps {
  currentTask: string;
  openTasks: any[];
}

function TaskList({currentTask, openTasks}: IProps) {
  const taskList = openTasks.map((task) => {
    return <li key={task.id}>{task.title}</li>
  });
  let id: number = 0;
  function _onTaskChange(e:any):void {
    e.preventDefault();
    currentTask = e.target.value;
  }

  function _onTaskSubmit() {
    
    openTasks.push({
      id,
      title: currentTask,
    });
    currentTask = '';
    id ++
  }

  return (
    <div className="task-list-cmp">
      <input placeholder="Enter a task" onChange={_onTaskChange}/>
      <br/>
      <button onClick={_onTaskSubmit}>+</button>
      <button>x</button>
      <ul>{taskList}</ul>
    </div>
  );
}

export default TaskList;
