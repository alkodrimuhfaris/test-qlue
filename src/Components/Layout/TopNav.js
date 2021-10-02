import React from 'react';
import SearchInput from './SearchInput';

export default function TopNav({hover}) {
  const [search, setSeearch] = React.useState('');
  return (
    <div className={`top-nav ${hover ? 'hover' : ''}`}>
      <div className="container h-100">
        <SearchInput
          search={search}
          setSearch={(e) => setSeearch(e.target.value)}
        />
      </div>
    </div>
  );
}
