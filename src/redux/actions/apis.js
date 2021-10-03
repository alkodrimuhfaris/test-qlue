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
  chartCovid: () => ({
    type: 'COVID_DATA',
    payload: axios
      .create({baseURL: 'https://api.kawalcorona.com/indonesia'})
      .get(`/provinsi`),
  }),
  selectChart: (payload) => ({
    type: 'SELECT_CHART',
    payload,
  }),
  getIndoData: () => ({
    type: 'COVID_DATA_INDO',
    payload: axios
      .create({baseURL: 'https://api.kawalcorona.com/indonesia'})
      .get(`/`),
  }),
  provinceSearch: (payload) => ({
    type: 'CHART_SEARCH',
    payload,
  }),
  provinceChangePage: (payload) => ({
    type: 'CHART_CHANGE_PAGE',
    payload,
  }),
  provinceChangeDataPage: (payload) => ({
    type: 'CHART_CHANGE_DATA_PER_PAGE',
    payload,
  }),
};
