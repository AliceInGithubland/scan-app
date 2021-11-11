import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import ImageInput from '../../Components/ImageInput/ImageInput';
import styles from './Scan.module.css';

function Scan() {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [recognizedText, setRecognizedText] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Scan.</h1>
      <h2 className={styles.underheader}>turn any document into pdf</h2>
      {recognizedText ? (
        <p>{recognizedText}</p>
      ) : (
        <ImageInput onUpload={setImageURL} />
      )}
      <button
        className={styles.scan}
        disabled={imageURL === null}
        onClick={() => {
          if (imageURL) {
            Tesseract.recognize(imageURL, 'eng', {
              logger: (message) => console.log(message.progress),
            }).then((result) => {
              const text = result.data.text;
              setRecognizedText(text);
            });
          }
        }}
      ></button>

      <a href="#">Skip</a>
    </div>
  );
}

export default Scan;
