import searchFunction from '../../Helpers/searchFunction';

const initialState = {
  success: false,
  pending: false,
  error: false,

  search: '',

  data: [],
  maxPage: 1,
  count: 0,
  currentPage: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
    case 'GET_DATA_RICK_PENDING': {
      return {
        ...state,
        success: false,
        pending: true,
        error: false,
      };
    }
    case 'GET_DATA_RICK_REJECTED': {
      return {
        ...state,
        success: false,
        pending: false,
        error: true,
      };
    }
    case 'GET_DATA_RICK_FULFILLED': {
      const {info, results} = action.payload.data;
      const {pages: maxPage, count} = info;
      const data = searchFunction({
        data: results,
        searchVal: state.search,
        fieldSearch: 'name',
      });

      return {
        ...state,
        success: true,
        pending: false,
        error: false,

        maxPage,
        data,
        count,
      };
    }
    case 'TABLE_SEARCH': {
      return {
        ...state,
        search: action.payload,
      };
    }
    case 'TABLE_PAGINATION': {
      return {
        ...state,
        currentPage: action.payload,
      };
    }
  }
};
