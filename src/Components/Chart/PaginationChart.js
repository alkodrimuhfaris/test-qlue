import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../../redux/actions';
import Page from '../Layout/Pagination/Page';
import ShowData from '../Layout/Pagination/ShowData';

export default function PaginationChart() {
  const {page, search, maxPage, dataShowed} = useSelector(
    (state) => state.chart,
  );
  const dispatch = useDispatch();
  return (
    <div className="pagination-wrapper">
      <Page currentPage={page} search={search} maxPage={maxPage} />
      <ShowData
        changePerPage={(e) => dispatch(actions.api.provinceChangeDataPage(e))}
        dataShowed={dataShowed}
      />
    </div>
  );
}
