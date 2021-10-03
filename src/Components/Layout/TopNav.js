import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../../redux/actions';
import SearchInput from './SearchInput';

export default function TopNav({hover}) {
  const {search} = useSelector((state) => state.table);
  const dispatch = useDispatch();
  return (
    <div className={`top-nav ${hover ? 'hover' : ''}`}>
      <div className="container h-100">
        <SearchInput
          search={search}
          setSearch={(e) => dispatch(actions.api.rickSearch(e.target.value))}
        />
      </div>
    </div>
  );
}
