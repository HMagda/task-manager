import React, {useEffect, useRef, useState} from 'react';
import styles from './SingleTask.module.scss';
import {Task} from '../../model';
import {FiEdit, FiTrash2, FiCheckCircle} from 'react-icons/fi';
import {deleted} from '../../features/task/task-slice';
import {useAppDispatch, useAppSelector} from '../../app/hooks';

interface Props {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTask: React.FC<Props> = ({task, tasks, setTasks}) => {
  const [edited, setEdited] = useState<boolean>(false);
  const [editedTask, setEditedTask] = useState<string>(task.task);

  const taskArr = useAppSelector((state) => state.manager.tasks);
  const dispatch = useAppDispatch();

  const handleDelete = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(deleted(task.id));
    console.log(task.id, 'task.id');
    console.log('handleDelete', taskArr);
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    console.log('dziala');
    e.preventDefault();

    setTasks(
      tasks.map((task) => (task.id === id ? {...task, task: editedTask} : task))
    );
    setEdited(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edited]);

  return (
    <form
      className={styles.single_task_container}
      onSubmit={(e) => handleEdit(e, task.id)}
    >
      {edited ? (
        <input
          className={`${styles.input} ${styles.single_task_text}`}
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
          ref={inputRef}
        />
      ) : (
        <div className={styles.single_task_text}>{task.task}</div>
      )}

      <div className={styles.icon_container}>
        <span
          className={styles.icon}
          onClick={() => {
            if (!edited) {
              setEdited(!edited);
            }
          }}
        >
          <FiEdit />
        </span>
        <span className={styles.icon}>
          <FiCheckCircle />
        </span>
        <span
          className={`${styles.icon} ${styles.trash}`}
          onClick={handleDelete}
        >
          <FiTrash2 />
        </span>
      </div>
    </form>
  );
};

export default SingleTask;
