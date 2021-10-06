const initialState = {
  success: false,
  pending: false,
  error: false,
  message: '',

  isLoggedin: false,

  id: '',
  email: '',
  name: '',
  phone: '',
  avatar: '',
  isResident: false,

  token: '',
  refreshToken: '',
  expire: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
    case 'LOGIN_PENDING': {
      return {
        ...state,
        success: false,
        pending: true,
        error: false,
      };
    }
    case 'LOGIN_REJECTED': {
      const {message} = action.payload.response
        ? action.payload.response.data
        : {message: 'log in failed'};
      return {
        ...state,
        success: false,
        pending: false,
        error: true,

        message,
      };
    }
    case 'LOGIN_FULFILLED': {
      const {profile, token: tknCont} = action.payload.data;

      const {
        expire_in: expire,
        access_token: token,
        refresh_token: refreshToken,
      } = tknCont;

      const {
        id,
        name,
        email,
        phone,
        image_url: avatar,
        is_a_resident: isResident,
      } = profile;

      const authObj = {
        isLoggedin: true,

        id,
        email,
        name,
        phone,
        avatar,
        isResident,

        token,
        refreshToken,
        expire,
      };

      Object.entries(authObj).forEach(([key, val], _idx) => {
        localStorage.setItem(key, val);
        return [key, val];
      });

      return {
        ...state,
        success: true,
        pending: false,
        error: false,
        ...authObj,
      };
    }
    case 'LOGOUT': {
      return {
        initialState,
      };
    }
    case 'CLEAR_STATE': {
      return {
        ...state,

        success: false,
        pending: false,
        error: false,
      };
    }
  }
};
