import Tesseract from 'tesseract.js';

type OnProgressProps = {
  progress: number;
  status: string;
};
type OnProgress = ({ progress, status }: OnProgressProps) => void;

export async function recognizeText(
  url: string,
  onProgress: OnProgress
): Promise<string> {
  const result = await Tesseract.recognize(url, 'eng', {
    logger: (message) => {
      onProgress({
        progress: message.progress,
        status: message.status,
      });
    },
  });
  return result.data.text;
}
