import React from 'react';
import styles from './styles.module.scss'
import { loader } from '../assets';

const Loader = ({ title }) => (
  <div className={styles.loadingContainer}>
    <img src={loader} alt="loader" className={styles.loadingImg} />
    <h1 className={styles.loadingTitle}>{title || 'Loading'}</h1>
  </div>
);

export default Loader;
