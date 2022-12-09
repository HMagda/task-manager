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
      {tasks.map((task) => (
        <SingleTask
          task={task}
          key={task.id}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </div>
  );
};

export default TaskList;
