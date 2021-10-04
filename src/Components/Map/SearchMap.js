import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../../redux/actions';
import useQuery from '../Hooks/useQuery';
import SeaarchWrapper from './SeaarchWrapper';

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
        <SeaarchWrapper
          getInputProps={getInputProps}
          suggestions={suggestions}
          getSuggestionItemProps={getSuggestionItemProps}
          loading={loading}
        />
      )}
    </PlacesAutocomplete>
  );
}
