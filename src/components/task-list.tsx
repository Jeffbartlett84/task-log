import * as React from 'react';
import SingleTask from './single-task';

export interface IProps {
  openTasks: any[];
  currentTask: string;
}

const TaskList = ({
  openTasks, 
  currentTask,
}: IProps) => {
  const taskList = openTasks.map((t) => {
    return (
      <li key={t.id}>
        <SingleTask
          task={t}
        />
        {/* <p>{t}</p> */}
      </li>
    )
  });

  return (
    <div className="task-list-cmp">
      <input 
        type="text" 
        defaultValue={currentTask} 
        placeholder="Enter a task" 
        // onChange={handleTaskInput}
      />
      <br/>
      <button>+</button>
      <button >x</button>
      <ul>{taskList}</ul>
    </div>
  );
}

export default TaskList;
