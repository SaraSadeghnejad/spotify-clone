import React from 'react';
import styles from './styles.module.scss';

const Error = () => (
  <div className={styles.errorContainer}>
    <h1 className={styles.errorMessage}>
      Something went wrong. Please try again
    </h1>
  </div>
);

export default Error;
