import React from 'react';
import Page from './Page';

export default function Pagination({question}) {
  return (
    <div className="pagination-wrapper">
      <Page question={question} />
    </div>
  );
}
