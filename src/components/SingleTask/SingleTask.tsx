import React, {useEffect, useRef, useState} from 'react';
import styles from './SingleTask.module.scss';
import {Task, TaskEditDto} from '../../model';
import {FiEdit, FiTrash2, FiCheckCircle} from 'react-icons/fi';
import {deleted, modified} from '../../features/task/task-slice';
import {useAppDispatch, useAppSelector} from '../../app/hooks';

interface Props {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTask: React.FC<Props> = ({task}) => {
  const [edited, setEdited] = useState<boolean>(false);
  const [editedTask, setEditedTask] = useState<string>(task.text);

  const taskArr = useAppSelector((state) => state.manager.tasks);
  const dispatch = useAppDispatch();

  const handleDelete = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(deleted(task.id));
  };

  const handleModify = (e: React.FormEvent) => {
    e.preventDefault();

    let edit: TaskEditDto = {
      id: task.id,
      text: editedTask,
    };

    dispatch(modified(edit));
    setEdited(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edited]);

  return (
    <form className={styles.single_task_container} onSubmit={handleModify}>
      {edited ? (
        <input
          className={`${styles.input} ${styles.single_task_text}`}
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
          ref={inputRef}
        />
      ) : (
        <div className={styles.single_task_text}>{task.text}</div>
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
