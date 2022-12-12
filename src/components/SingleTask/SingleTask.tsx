import React from 'react';
import styles from './SingleTask.module.scss';
import {Task} from '../../model';
import {FiEdit, FiTrash2, FiCheckCircle} from 'react-icons/fi';

interface Props {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTask: React.FC<Props> = ({task, tasks, setTasks}) => {
  return (
    <form className={styles.single_task_container}>
      <span className={styles.single_task_text}>{task.task}</span>
      <div className={styles.icon_container}>
        <span className={styles.icon}>
          <FiEdit />
        </span>
        <span className={styles.icon}>
          <FiCheckCircle />
        </span>
        <span className={`${styles.icon} ${styles.trash}`}>
          <FiTrash2 />
        </span>
      </div>
    </form>
  );
};

export default SingleTask;
