import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header_container}>
      <h1 className={styles.header}>Task Manager</h1>
    </div>
  );
};

export default Header;
