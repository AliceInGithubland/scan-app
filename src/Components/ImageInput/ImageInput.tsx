import React, { ChangeEvent, useState } from 'react';
import styles from './ImageInput.module.css';

function ImageInput() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0];
    const newImageURL = URL.createObjectURL(file);
    setImageUrl(newImageURL);
  };

  return (
    <>
      <label htmlFor="Start" className={styles.button}>
        Import
      </label>
      <input id="Start" type="file" accept="image/*" onChange={handleChange} />

      {imageUrl && <img className={styles.img} src={imageUrl} />}
    </>
  );
}

export default ImageInput;