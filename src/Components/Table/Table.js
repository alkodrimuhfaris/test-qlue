import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import useQuery from '../Hooks/useQuery';
import actions from '../../redux/actions';
import Pagination from '../Layout/Pagination';
import ContentTable from './ContentTable';

export default function Table() {
  const dispatch = useDispatch();
  const history = useHistory();
  const query = useQuery();
  const querySearch = query.get('search');
  const queryPage = query.get('page');
  const [search, setSearch] = React.useState('');
  const {
    maxPage,
    currentPage,
    search: savedSearch,
  } = useSelector((state) => state.table);

  React.useEffect(() => {
    if (search !== querySearch) {
      if (querySearch || querySearch === '') {
        setSearch(querySearch);
      }
    }
    if (savedSearch !== querySearch && !savedSearch) {
      if (querySearch || querySearch === '') {
        dispatch(actions.api.rickSearch(querySearch));
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
      dispatch(actions.api.rickPagination(page * 1));
    }
  }, [queryPage]);

  React.useEffect(() => {
    dispatch(actions.api.getRickAndMorty(currentPage * 1, search));
  }, [search]);

  React.useEffect(() => {
    dispatch(actions.api.getRickAndMorty(currentPage * 1, search));
  }, [currentPage]);

  React.useEffect(() => {
    if (querySearch !== savedSearch) {
      history.push({
        search: `?page=1&search=${savedSearch}`,
      });
    }
  }, [savedSearch]);

  return (
    <div className="table">
      <ContentTable />
      <Pagination />
    </div>
  );
}
