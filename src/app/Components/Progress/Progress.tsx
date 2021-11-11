import React from 'react';
import { RecognizeProgress } from '../../utils/ocr';
import styles from './Progress.module.css';

function Progress({ status, progress }: RecognizeProgress): JSX.Element {
  return (
    <aside className={styles.container}>
      {status}
      <progress value={progress * 100} max={100} />
    </aside>
  );
}

export default Progress;
