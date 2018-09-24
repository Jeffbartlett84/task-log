import * as moment from 'moment';
import * as React from 'react';
import uuid3 from 'uuid';
import SingleTask from './single-task';

export interface INewTask {
  completed: boolean,
  completedDate: string,
  id: string,
  important: boolean,
  isEditing: boolean,
  lastUpdated: string,
  notes: string,
  title: string,
}
export interface IProps {
  openTasks: any[];
}


const TaskList = ({
  openTasks, 
}: IProps) => {
  const taskList = openTasks.map((t) => {
    return (
      <li key={t.id}>
        <SingleTask
          task={t}
          />
        { /* <p>{t}</p> */ }
      </li>
    )
  });
  
  const newTask = {
    completed: false,
    completedDate: '',
    id: uuid3(),
    important: false,
    isEditing: false,
    lastUpdated: moment('MM/DD/YYYY'),
    notes: '',
    title: '',
  };
  const handleTaskInput = (e: any): void => {
    // take event value and set to newTask
    newTask.title = e.target.value;
  }

  const addNewTask = () => {
    const newTaskCopy = Object.assign({}, newTask, );
    return newTaskCopy;
  }

  return (
    <div className="task-list-cmp">
      <input 
        type="text" 
        defaultValue={newTask.title} 
        placeholder="Enter a task" 
        onChange={handleTaskInput}
      />
      <br/>
      <button onClick={addNewTask}>+</button>
      <button >x</button>
      <ul>{taskList}</ul>
    </div>
  );
}

export default TaskList;
