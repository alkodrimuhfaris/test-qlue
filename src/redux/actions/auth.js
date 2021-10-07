import axios from 'axios';

export default {
  login: ({email, password}) => ({
    type: 'LOGIN',
    payload: axios
      .create({baseURL: 'https://ayodhya-dev.qlue.id/api'})
      .post('/auths/login', {email, password, fcm_token: 'x'}),
  }),
  logout: () => ({
    type: 'LOGOUT',
    payload: null,
  }),
  setInitial: () => ({
    type: 'SET_INITIAL_STATE',
    payload: null,
  }),
  clearState: () => ({
    type: 'CLEAR_STATE',
    payload: null,
  }),
};
