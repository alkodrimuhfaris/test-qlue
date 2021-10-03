import axios from 'axios';
import qs from 'qs';

export default {
  getRickAndMorty: (page, name = '') => ({
    type: 'GET_DATA_RICK',
    payload: axios
      .create({baseURL: 'https://rickandmortyapi.com/api'})
      .get(`/character?${qs.stringify({page, name})}`),
  }),
  rickSearch: (payload = '') => ({
    type: 'TABLE_SEARCH',
    payload,
  }),
  rickPagination: (payload = 1) => ({
    type: 'TABLE_PAGINATION',
    payload,
  }),
};
