import * as React from 'react';

export interface IProps {
  openTasks: any[];
  addNewTask: (t: string) => void;
  clearTaskInput: () => void;
  onTaskChange: (e: object) => void;
  currentTask: string;
}

const TaskList = ({
  openTasks, 
  addNewTask,
  clearTaskInput, 
  onTaskChange,
  currentTask
}: IProps) => {
  const taskList = openTasks.map((t) => {
    return <li key={t.id}>{t.title}</li>
  });

  const handleTaskInput = (e:any):void => {
    onTaskChange(e);
  }

  const handleAddNewTask = () => {
    if(currentTask) {
      addNewTask(currentTask);
    }
  }

  const handleClearTaskInput = () => {
    if(currentTask) {
      clearTaskInput();
    }
  }

  return (
    <div className="task-list-cmp">
      <input 
        type="text" 
        value={currentTask} 
        placeholder="Enter a task" 
        onChange={handleTaskInput}
      />
      <br/>
      <button onClick={handleAddNewTask}>+</button>
      <button onClick={handleClearTaskInput}>x</button>
      <ul>{taskList}</ul>
    </div>
  );
}

export default TaskList;
