import React, { useState } from 'react';
import ImageInput from '../../Components/ImageInput/ImageInput';
import styles from './Scan.module.css';
import { RecognizeProgress, recognizeText } from '../../utils/ocr';
import Progress from '../../Components/Progress/Progress';
import AddDocumentForm from '../../Components/AddDocumentForm/AddDocumentForm';

function Scan(): JSX.Element {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [recognizedText, setRecognizedText] = useState<string | null>(null);
  const [recognizeProgress, setRecognizeProgress] =
    useState<RecognizeProgress | null>(null);

  return (
    <div className={styles.container}>
      {recognizedText ? (
        <p>{recognizedText}</p>
      ) : (
        <ImageInput onUpload={setImageURL} />
      )}
      {recognizedText && <AddDocumentForm text={recognizedText} />}

      {!recognizedText && recognizeProgress && (
        <Progress
          progress={recognizeProgress.progress * 100}
          status={recognizeProgress.status}
        />
      )}

      {!recognizeProgress && (
        <button
          className={styles.scan}
          disabled={imageURL === null}
          onClick={() => {
            if (imageURL) {
              recognizeText(imageURL, setRecognizeProgress).then(
                setRecognizedText
              );
            }
          }}
        >
          Scan
        </button>
      )}
      <a href="#">Skip</a>
    </div>
  );
}

export default Scan;
