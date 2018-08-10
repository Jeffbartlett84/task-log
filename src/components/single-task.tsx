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
  setTask: (t: ITask) => void;
  task: ITask;
}


const SingleTask = ({
  setTask,
  task
}: IProps) => {
  
  const toggleEdit = () => {
    const newTask = Object.assign({}, task);
    newTask.isEditing = !task.isEditing;
    setTask(newTask);
  } 
  return (
    <div className="single-task-cmp">
      <button onClick={toggleEdit}>
        <h3 className="taskTitle">{task.title}</h3>
        <p>{task.lastUpdated}</p>
        {task.isEditing &&
          <div>{task.notes}</div>
        }
      </button>
    </div>
  );
}

export default SingleTask;