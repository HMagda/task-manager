import React from 'react';
import {Task} from '../../model';
import styles from './TaskList.module.scss';
import SingleTask from '../SingleTask/SingleTask';

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<Props> = ({tasks, setTasks}) => {
  return (
    <div className={styles.task_list_container}>
      <div className={styles.active_tasks_container}>
        <h2 className={styles.tasks_heading}>Active Tasks</h2>
        {tasks
          .filter((task) => task.isDone === false)
          .map((task) => (
            <SingleTask
              task={task}
              key={task.id}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
      </div>
      <div className={styles.done_tasks_container}>
        <h2 className={styles.tasks_heading}>Completed Tasks</h2>
        {tasks
          .filter((task) => task.isDone === true)
          .map((task) => (
            <SingleTask
              task={task}
              key={task.id}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
      </div>
    </div>
  );
};

export default TaskList;
