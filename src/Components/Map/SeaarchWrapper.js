import React from 'react';
import SearchInput from './SearchInput';

export default function SeaarchWrapper({
  getInputProps,
  loading,
  suggestions,
  getSuggestionItemProps,
}) {
  return (
    <div className="search-wrapper position-relative">
      <SearchInput getInputProps={getInputProps} />
      <div className="suggestions">
        {loading && <div className="px-4">Loading...</div>}
        {suggestions.map((suggestion) => {
          const style = suggestion.active
            ? {backgroundColor: '#e9f1fc', cursor: 'pointer'}
            : {backgroundColor: '#ffffff', cursor: 'pointer'};
          return (
            <div
              {...getSuggestionItemProps(suggestion, {
                className: 'suggestion',
                style,
              })}
            >
              <span>{suggestion.description}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
