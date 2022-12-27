import React, {useEffect, useRef, useState} from 'react';
import styles from './SingleTask.module.scss';
import {Task, TaskEditDto, TaskDoneDto} from '../../model';
import {FiEdit, FiTrash2, FiCheckCircle} from 'react-icons/fi';
import {modified, done, deleted} from '../../features/task/task-slice';
import {useAppDispatch} from '../../app/hooks';

interface Props {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTask: React.FC<Props> = ({task}) => {
  const [edited, setEdited] = useState<boolean>(false);
  const [editedTask, setEditedTask] = useState<string>(task.text);

  const dispatch = useAppDispatch();

  const handleModify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!edited) {
      setEdited(!edited);
    } else {
      let edit: TaskEditDto = {
        id: task.id,
        text: editedTask,
      };
      dispatch(modified(edit));
      setEdited(!edited);
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edited]);

  const handleDone = (e: React.FormEvent) => {
    e.preventDefault();
    let doneTask: TaskDoneDto = {
      id: task.id,
      isDone: true,
    };
    dispatch(done(doneTask));
  };

  const handleDelete = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(deleted(task.id));
  };

  return (
    <form
      className={`${styles.single_task_container} ${
        task.isDone ? styles.background_done : ''
      }`}
      onSubmit={handleModify}
    >
      {edited ? (
        <input
          className={`${styles.input} ${styles.single_task_text}`}
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
          ref={inputRef}
        />
      ) : (
        <div
          className={`${styles.single_task_text} ${
            task.isDone ? styles.strikethrough : ''
          }`}
        >
          {task.text}
        </div>
      )}

      <div className={styles.icon_container}>
        {task.isDone ? (
          <button disabled={true}>
            <span className={`${styles.icon} ${styles.icon_disabled}`}>
              <FiCheckCircle />
            </span>
          </button>
        ) : (
          <button disabled={false} onClick={handleDone} type='button'>
            <span className={styles.icon}>
              <FiCheckCircle />
            </span>
          </button>
        )}

        {task.isDone ? (
          <button disabled={true}>
            <span className={`${styles.icon} ${styles.icon_disabled}`}>
              <FiEdit />
            </span>
          </button>
        ) : (
          <button disabled={false} type='submit'>
            <span className={styles.icon}>
              <FiEdit />
            </span>
          </button>
        )}

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
