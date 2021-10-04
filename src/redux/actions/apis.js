import axios from 'axios';
import qs from 'qs';

export default {
  // table
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

  // chart
  chartCovid: () => ({
    type: 'COVID_DATA',
    payload: axios.get(`https://api.kawalcorona.com/indonesia/provinsi`),
  }),
  selectChart: (payload) => ({
    type: 'SELECT_CHART',
    payload,
  }),
  getIndoData: () => ({
    type: 'COVID_DATA_INDO',
    payload: axios
      .create({baseURL: 'https://data.covid19.go.id/public/api'})
      .get(`/update.json`),
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

  // maps
  searchMap: (payload) => ({
    type: 'GMAPS_SEARCH',
    payload,
  }),
};
