const initialState = {
  success: false,
  pending: false,
  error: false,

  search: '',
  marker: {lat: -6.2120371, lng: 106.716},
  address: '',
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
    case 'CHANGE_MARKER': {
      return {
        ...state,
        marker: action.payload,
      };
    }
    case 'CHANGE_ADDRESS': {
      return {
        ...state,
        address: action.payload,
      };
    }
  }
};
