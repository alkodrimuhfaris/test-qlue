const initialState = {
  success: false,
  pending: false,
  error: false,
  isSessionEnd: false,
  message: '',

  isLoggedIn: false,

  id: '',
  email: '',
  name: '',
  phone: '',
  avatar: '',
  isResident: false,

  token: '',
  refreshToken: '',
  expire: 0,
  expireTZ: 0,
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
        expires_in: expire,
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
        isLoggedIn: true,

        id,
        email,
        name,
        phone,
        avatar,
        isResident,

        token,
        refreshToken,
        expire,
        expireTZ: Date.now() + expire,
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
      const {
        isLoggedIn,

        id,
        email,
        name,
        phone,
        avatar,
        isResident,

        token,
        refreshToken,
        expire,
        expireTZ,
      } = state;

      const authObj = {
        isLoggedIn,

        id,
        email,
        name,
        phone,
        avatar,
        isResident,

        token,
        refreshToken,
        expire,
        expireTZ,
      };

      Object.keys(authObj).forEach((key, _idx) => {
        localStorage.removeItem(key);
        return key;
      });

      return {
        ...initialState,
        isLoggedIn: false,
        ...action.payload,
      };
    }

    case 'SET_INITIAL_STATE': {
      const authObj = {
        isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',

        id: localStorage.getItem('id') || '',
        email: localStorage.getItem('email') || '',
        name: localStorage.getItem('name') || '',
        phone: localStorage.getItem('phone') || '',
        avatar: localStorage.getItem('avatar') || '',
        isResident: localStorage.getItem('isResident') === 'true',

        token: localStorage.getItem('token') || '',
        refreshToken: localStorage.getItem('refreshToken') || '',
        expire: localStorage.getItem('expire')
          ? localStorage.getItem('expire') * 1
          : 0,
        expireTZ: localStorage.getItem('expireTZ')
          ? localStorage.getItem('expireTZ') * 1
          : 0,
      };

      // const {expireTZ} = authObj;
      // const currTime = Date.now();
      // if (currTime > expireTZ) {
      //   return {
      //     ...initialState,
      //   };
      // }

      return {
        ...state,
        ...authObj,
      };
    }
    case 'CLEAR_STATE': {
      return {
        ...state,

        success: false,
        pending: false,
        error: false,
        isSessionEnd: false,
        message: '',
      };
    }
  }
};
