import React from 'react';
import SvgIcon from '../ComponentLayout/SvgIcon';

export default function SearchInput({getInputProps}) {
  return (
    <div className="w-100 h-100 position-relative">
      <form
        className="search-container"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          {...getInputProps({
            placeholder: 'Search Place Here',
            className: 'search',
          })}
        />
        <SvgIcon className={['search-icon']} src="/assets/icon/search.svg" />
      </form>
    </div>
  );
}
