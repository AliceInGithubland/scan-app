import React, { FormEvent, useState } from 'react';

type AddDocumentFormProps = {
  text: string;
};

function AddDocumentForm({ text }: AddDocumentFormProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const document = {
      title,
      text,
    };
    fetch('https://json-server.machens.dev/docs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(document),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default AddDocumentForm;
