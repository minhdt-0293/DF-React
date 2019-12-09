import * as types from './../constants/ActionTypes';

const initialState = {
  fetching: false,
  error: null,
  categories: [],
  total_pages: 1,
  currentPage: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CATEGORIES:
      return { ...state, fetching: true, error: null };
    case types.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        categories: action.data.categories,
        total_pages: action.data.total_pages
      };
    case types.FETCH_CATEGORIES_FAILURE:
      return { ...state, fetching: false, error: action.error };
    case types.DELETE_CATEGORY:
      return { ...state, fetching: true, error: null };
    case types.DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        categories: action.data.categories,
        total_pages: action.data.total_pages
      };
    case types.DELETE_CATEGORY_FAILURE:
      return { ...state, fetching: false, error: action.error };
    case types.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    default:
      return state;
  }
};

export default reducer;
