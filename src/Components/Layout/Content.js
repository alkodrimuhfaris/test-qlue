import React from 'react';

export default function Content(props) {
  return (
    <div className={`content-wrapper ${props.hover ? 'hover' : ''}`}>
      <div className={`blank-content ${props.hover ? 'hover' : ''}`} />
      <div className="container">
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
}
