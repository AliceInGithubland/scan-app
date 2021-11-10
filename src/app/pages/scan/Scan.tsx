import React, { useState } from 'react';
import ImageInput from '../../Components/ImageInput/ImageInput';
import styles from './Scan.module.css';

function Scan() {
  const [imageURL, setImageURL] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      <ImageInput onUpload={setImageURL} />
      <button disabled={imageURL === null}>Scan</button>
      <a href="#">Skip</a>
    </div>
  );
}

export default Scan;
