import * as types from './../constants/ActionTypes';

const initialState = {
  fetching: false,
  error: null,
  orders: [],
  total_pages: 1,
  currentPage: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ORDERS:
      return { ...state, fetching: true, error: null };
    case types.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        orders: action.data.orders,
        total_pages: action.data.total_pages
      };
    case types.FETCH_ORDERS_FAILURE:
      return { ...state, fetching: false, error: action.error };
    case types.CHANGE_STATUS_ORDER:
      return { ...state, fetching: true, error: null };
    case types.CHANGE_STATUS_ORDER_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        orders: action.data.orders,
        total_pages: action.data.total_pages
      };
    case types.CHANGE_STATUS_ORDER_FAILURE:
      return { ...state, fetching: false, error: action.error };
    case types.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    default:
      return state;
  }
};

export default reducer;
