import React from 'react';
import {useLocation} from 'react-router-dom';
import {getRoute} from '../Hooks/useConfigRoute';
import SearchMap from '../Map/SearchMap';
import SearchInput from './SearchInput';

export default function TopNav({hover}) {
  const location = useLocation();
  const {pathname} = location;
  const route = getRoute(pathname);
  return (
    <div className={`top-nav ${hover ? 'hover' : ''}`}>
      <div className="container d-flex h-100">
        {route.title !== 'Map' ? (
          <SearchInput
            search={route.searchVal}
            setSearch={(e) => route.searchFunc(e.target.value)}
          />
        ) : (
          <SearchMap />
        )}
        <div className="title">
          <span>{route.contentTitle}</span>
        </div>
      </div>
    </div>
  );
}
