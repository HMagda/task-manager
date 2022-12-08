import React from 'react';
import styles from './InputField.module.scss';

const InputField = () => {
  return (
    <div className={styles.input_wrapper}>
      <form className={styles.input_container}>
        <input
          type='input'
          placeholder='Enter new task'
          className={styles.input}
        />
        <button type='submit' className={styles.input_submit_btn}>
          Add
        </button>
      </form>
    </div>
  );
};

export default InputField;
