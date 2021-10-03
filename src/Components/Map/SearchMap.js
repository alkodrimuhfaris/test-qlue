import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../../redux/actions';
import SvgIcon from '../ComponentLayout/SvgIcon';
import useQuery from '../Hooks/useQuery';

export default function SearchMap() {
  const dispatch = useDispatch();
  const query = useQuery();
  const querySearch = query.get('search');
  const {search} = useSelector((state) => state.map);
  const firstOpen = React.useRef(null);

  const handleSelect = async (value) => {
    const result = await geocodeByAddress(value);
    const ltlng = await getLatLng(result[0]);
    dispatch(actions.api.searchMap(value));
    dispatch({type: 'CHANGE_MARKER', payload: ltlng});
    dispatch({type: 'CHANGE_ADDRESS', payload: value});
  };

  React.useEffect(() => {
    if (!firstOpen.current && (querySearch !== '' || querySearch)) {
      (async () => {
        await handleSelect(querySearch);
      })();
      firstOpen.current = true;
    }
  }, [querySearch]);

  return (
    <PlacesAutocomplete
      value={search}
      onChange={(e) => {
        dispatch(actions.api.searchMap(e));
      }}
      onSelect={handleSelect}
    >
      {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
        <div className="search-wrapper position-relative">
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
              <SvgIcon
                className={['search-icon']}
                src="/assets/icon/search.svg"
              />
            </form>
          </div>
          <div className="suggestions">
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              const style = suggestion.active
                ? {backgroundColor: '#fafafa', cursor: 'pointer'}
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
      )}
    </PlacesAutocomplete>
  );
}
