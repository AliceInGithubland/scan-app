import React from 'react';
import Progress from './Progress';

export default {
  component: Progress,
  title: 'Components/Progress',
};

export const Initializing = () => (
  <Progress status="Initializing" progress={0.5} />
);

export const Done = () => <Progress status="Recognizing" progress={1} />;

export const Begin = () => <Progress status="Recognizing" progress={0} />;
