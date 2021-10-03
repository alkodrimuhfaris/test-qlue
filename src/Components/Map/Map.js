import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import useQuery from '../Hooks/useQuery';
import actions from '../../redux/actions';
import MapAPI from './MapAPI';

export default function Map() {
  const dispatch = useDispatch();
  const history = useHistory();
  const query = useQuery();
  const querySearch = query.get('search');
  const {search: savedSearch} = useSelector((state) => state.map);

  React.useEffect(() => {
    if (savedSearch !== querySearch && !savedSearch) {
      if (querySearch || querySearch === '') {
        dispatch(actions.api.searchMap(querySearch));
      }
    }
  }, [querySearch]);

  React.useEffect(() => {
    if (querySearch !== savedSearch) {
      history.push({
        search: `?search=${savedSearch}`,
      });
    }
  }, [savedSearch]);

  return (
    <div className="map">
      <MapAPI />
    </div>
  );
}
