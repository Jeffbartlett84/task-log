import * as React from 'react';

export interface IProps {
  openTasks: any[];
  task: string;
}

function TaskList({task, openTasks}: IProps) {
  const taskList = openTasks.map((t) => {
    return <li key={t.id}>{t.title}</li>
  });
  let id: number = 0;
  function _onTaskChange(e:any):void {
    e.preventDefault();
    task = e.target.value;
  }

  function _onTaskSubmit() {
    openTasks.push({
      id,
      title: task,
    });
    task = '';
    id ++;
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
