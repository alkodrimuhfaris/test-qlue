const initialState = {
  success: false,
  pending: false,
  error: false,

  id: null,
  data: [],
  offset: 0,
  limit: 10,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
    case 'GET_DATA_POKEMON_PENDING': {
      return {
        ...state,
        success: false,
        pending: true,
        error: false,
      };
    }
    case 'GET_DATA_POKEMON_REJECTED': {
      return {
        ...state,
        success: false,
        pending: false,
        error: true,
      };
    }
    case 'GET_DATA_POKEMON_SUCCESS': {
      return {
        ...state,
        success: true,
        pending: false,
        error: false,
      };
    }
  }
};
