import React from 'react';

export default ({ title, content }) => (
  <div className="slide">
    <h1 className="slide-title">{title}</h1>
    <div className="slide-content">{content}</div>
  </div>
);
