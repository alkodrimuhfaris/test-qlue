const initialState = {
  success: false,
  pending: false,
  error: false,

  search: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
    case 'GMAPS_SEARCH': {
      return {
        ...state,
        search: action.payload,
      };
    }
  }
};
