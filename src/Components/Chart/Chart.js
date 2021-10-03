import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import useQuery from '../Hooks/useQuery';
import actions from '../../redux/actions';
import TableChart from './TableChart';
import Lower from './ChartComponent/Lower';
import Upper from './ChartComponent/Upper';

export default function Chart() {
  const dispatch = useDispatch();
  const history = useHistory();
  const query = useQuery();
  const querySearch = query.get('search');
  const queryPage = query.get('page');
  const [search, setSearch] = React.useState('');
  const {
    maxPage,
    currentPage,
    success,
    search: savedSearch,
    indoData,
  } = useSelector((state) => state.chart);

  React.useEffect(() => {
    dispatch(actions.api.chartCovid());
    if (!indoData.length) {
      dispatch(actions.api.getIndoData());
    }
  }, []);

  React.useEffect(() => {
    if (search !== querySearch) {
      if (querySearch || querySearch === '') {
        setSearch(querySearch);
      }
    }
    if (savedSearch !== querySearch && !savedSearch) {
      if (querySearch || querySearch === '') {
        dispatch(actions.api.provinceSearch(querySearch));
      }
    }
  }, [querySearch]);

  React.useEffect(() => {
    if (queryPage !== currentPage) {
      if (queryPage > maxPage) {
        history.push({
          search: `?page=${maxPage}`,
        });
      }
      if (queryPage <= 0) {
        history.push(
          savedSearch
            ? {
                search: `?page=${1}&search=${savedSearch}`,
              }
            : {
                search: `?page=${1}`,
              },
        );
      }
      const page = queryPage || (queryPage > maxPage ? maxPage : 1);
      dispatch(actions.api.provinceChangePage(page * 1));
    }
  }, [queryPage]);

  React.useEffect(() => {
    if (success) {
      dispatch(actions.api.provinceSearch(search));
    }
  }, [search, success]);

  React.useEffect(() => {
    if (querySearch !== savedSearch) {
      history.push({
        search: `?page=1&search=${savedSearch}`,
      });
    }
  }, [savedSearch]);

  return (
    <div className="chart-wrapper">
      <div className="chart-inside no-gutters">
        <div className="cov-table">
          <TableChart />
        </div>
        <div className="cov-chart">
          <div className="cov-chart-wrap">
            <div className="indo-chart">
              <Upper />
            </div>
            <div className="province-chart">
              <Lower />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
