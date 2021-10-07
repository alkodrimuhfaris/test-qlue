import React from 'react';
import {useSelector} from 'react-redux';
import Page from './Page';

export default function Pagination() {
  const {currentPage, search, maxPage} = useSelector((state) => state.table);
  return (
    <div className="pagination-wrapper center">
      <Page currentPage={currentPage} search={search} maxPage={maxPage} />
    </div>
  );
}
