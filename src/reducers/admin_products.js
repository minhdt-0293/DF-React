import * as types from './../constants/ActionTypes';

const initialState = {
  fetching: false,
  error: null,
  products: [],
  total_pages: 1,
  currentPage: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return { ...state, fetching: true, error: null };
    case types.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        products: action.data.products,
        total_pages: action.data.total_pages
      };
    case types.FETCH_PRODUCTS_FAILURE:
      return { ...state, fetching: false, error: action.error };
    case types.DELETE_PRODUCT:
      return { ...state, fetching: true, error: null };
    case types.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        products: action.data.products,
        total_pages: action.data.total_pages
      };
    case types.DELETE_PRODUCT_FAILURE:
      return { ...state, fetching: false, error: action.error };
    case types.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    default:
      return state;
  }
};

export default reducer;
