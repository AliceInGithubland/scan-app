import React, { useState } from 'react';
import ImageInput from '../../Components/ImageInput/ImageInput';
import styles from './Scan.module.css';
import { RecognizeProgress, recognizeText } from '../../utils/ocr';
import Progress from '../../Components/Progress/Progress';
import AddDocumentForm from '../../Components/AddDocumentForm/AddDocumentForm';
import useRecognizeText from '../../utils/useRecognizeText';

function Scan(): JSX.Element {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [recognizedText, setRecognizedText] = useState<string | null>(null);
  const [recognizeProgress, setRecognizeProgress] =
    useState<RecognizeProgress | null>(null);
  const { text, progress, recognize } = useRecognizeText();

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Scan.</h1>
      {recognizedText ? (
        <p>{recognizedText}</p>
      ) : (
        <ImageInput onUpload={setImageURL} />
      )}
      {recognizedText && <AddDocumentForm text={recognizedText} />}
      {text && <AddDocumentForm text={text} />}

      {!recognizedText && recognizeProgress && (
        <Progress progress={progress.progress * 100} status={progress.status} />
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
              recognize(imageURL);
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
