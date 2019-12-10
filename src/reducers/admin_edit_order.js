import * as types from './../constants/ActionTypes';

const initialState = { order: {}, status: '', orderDetails: {}, customer: {}, statusFetch: '' };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_ORDER:
      return state;
    case types.UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        order: action.result.order,
        orderDetails: action.result.order_details,
        customer: action.result.user,
        status: action.result.status
      };
    case types.FETCH_ORDER:
      return state;
    case types.FETCH_ORDER_SUCCESS:
      return {
        ...state,
        order: action.result.order,
        orderDetails: action.result.order_details,
        customer: action.result.user,
        statusFetch: action.result.status
      };
    case types.CLEAR_OLD_ORDER:
      return {
        ...state,
        order: {},
        orderDetails: {},
        customer: {},
        status: '',
        statusFetch: ''
      };
    default:
      return state;
  }
};

export default reducer;
