import React, { ChangeEvent, useState } from 'react';
import ScanIcon from './ScanIcon';
import styles from './ImageInput.module.css';

type ImageInputProps = {
  onUpload: (url: string) => void;
};

function ImageInput({ onUpload }: ImageInputProps) {
  const [imageURL, setImageURL] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0];
    const newImageURL = URL.createObjectURL(file);
    setImageURL(newImageURL);
    onUpload(newImageURL);
  };

  return (
    <div className={styles.container}>
      {imageURL && <img className={styles.img} src={imageURL} />}
      <label className={styles.browseButton}>
        Select Image
        <input
          type="file"
          style={{ display: 'none' }}
          accept="image/*"
          onChange={handleChange}
        />{' '}
      </label>
    </div>
  );
}

export default ImageInput;
