import React from 'react';
import Page from './Page';
import ShowData from './ShowData';

export default function Pagination({question}) {
  return (
    <div className="pagination-wrapper">
      <Page question={question} />
      <ShowData question={question} />
    </div>
  );
}
