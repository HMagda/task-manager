import React, {useRef} from 'react';
import styles from './InputField.module.scss';
import useAutosizeTextArea from '../../useAutosizeTextArea';

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({task, setTask, handleAdd}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, task);

  return (
    <div className={styles.input_wrapper}>
      <form className={styles.input_container} onSubmit={handleAdd}>
        <textarea
          placeholder='Enter new task'
          className={styles.input}
          value={task}
          ref={textAreaRef}
          rows={1}
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
