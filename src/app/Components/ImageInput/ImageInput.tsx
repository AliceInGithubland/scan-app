import React, { ChangeEvent, useState } from 'react';
import ScanIcon from './ScanIcon';
import styles from './ImageInput.module.css';

type ImageInputProps = {
  onUpload: (url: string) => void;
};

function ImageInput({ onUpload }: ImageInputProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0];
    const newImageURL = URL.createObjectURL(file);
    setImageUrl(newImageURL);
    onUpload(newImageURL);
  };

  return (
    <label className="scanIcon">
      <label htmlFor="Start" className={styles.button}>
        Import
      </label>
      <ScanIcon />
      <input id="Start" type="file" accept="image/*" onChange={handleChange} />

      {imageUrl && <img className={styles.img} src={imageUrl} />}
    </label>
  );
}

export default ImageInput;
