import React from 'react';

function Styleguide() {
  return (
    <div>
      <h1>headline 1</h1>
      <h2>Headline 2</h2>
      <h3>Headline 3</h3>
      <h4>Headline 4</h4>
      <h5>Headline 5</h5>
      <p>Paragraph/Text</p>
      <a href="#">Link</a>

      <button
        style={{
          width: 210,
          height: 39,
          background: 'var(--color-background-button)',
          borderRadius: 15,
          border: 0,
        }}
      >
        test
      </button>
    </div>
  );
}

export default Styleguide;
