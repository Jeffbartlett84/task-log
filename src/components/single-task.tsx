import * as React from 'react';

export interface ITask {
  completed: boolean;
  completedDate: string;
  id: number;
  important: boolean;
  isEditing: boolean;
  editTask: any;
  lastUpdated: string;
  notes: string;
  title: string;
}

export interface IProps {
  task: ITask;
}


const SingleTask = ({
  task,
}: IProps) => {
  // const newTaskValue = task;

  const editedObject = Object.assign({}, task);

  const editTask = () => {
    const newTask = Object.assign({}, task);
    newTask.isEditing = true;
  }
  const handleTaskInput = (e: any): void => {
    onTaskChange(e);
  }
  const saveTask = () => {
    editedObject.isEditing = false;
  }

  const onTaskChange = (e) => {
    // e.preventDefault();
    // const newTask = Object.assign(editedObject, task);
    const name = e.target.name;
    const newValue = e.target.value;
    editedObject[name] = newValue;
  }

  return (
    <div className="single-task-cmp">
      
      {!task.isEditing &&
        <button onClick={editTask}>  
          <h3 className="taskTitle">{task.title}</h3>
          <p>{task.lastUpdated}</p>
        </button>
      }
      {task.isEditing &&
        <div>
          <input value={editedObject.title} onChange={handleTaskInput} name="title"/>
          <input value={editedObject.notes} onChange={handleTaskInput} name="notes"/>
          <button onClick={saveTask}>save me</button>
        </div>
      }
    </div>
  );
}

export default SingleTask;