import React from 'react';
import styles from './InputField.module.scss';

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({task, setTask, handleAdd}) => {
  return (
    <div className={styles.input_wrapper}>
      <form className={styles.input_container} onSubmit={handleAdd}>
        <input
          placeholder='Enter new task'
          className={styles.input}
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type='submit' className={styles.input_submit_btn}>
          Add
        </button>
      </form>
    </div>
  );
};

export default InputField;
