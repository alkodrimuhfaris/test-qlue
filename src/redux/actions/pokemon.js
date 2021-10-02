import qs from 'qs';
import services from '../../Helpers/services';

export default {
  getPokemon: (offset, limit) => ({
    type: 'GET_DATA_POKEMON',
    payload: services.get(`/pokemon?${qs.stringify({offset, limit})}`),
  }),
};
