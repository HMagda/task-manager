import React from 'react';
import styles from './InputField.module.scss';

interface Props {
  taskNew: string;
  setTaskNew: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({taskNew, setTaskNew, handleAdd}) => {
  return (
    <div className={styles.input_wrapper}>
      <form className={styles.input_container} onSubmit={handleAdd}>
        <input
          placeholder='Enter new task'
          className={styles.input}
          value={taskNew}
          onChange={(e) => setTaskNew(e.target.value)}
        />
        <button
          type='submit'
          aria-label='add new task'
          className={styles.input_submit_btn}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default InputField;
