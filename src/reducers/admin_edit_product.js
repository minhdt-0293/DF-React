import * as types from './../constants/ActionTypes';

const initialState = { product: {}, status: '' };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PRODUCT:
      return state;
    case types.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.result.product,
        status: action.result.status
      };
    case types.FETCH_PRODUCT:
      return state;
    case types.FETCH_PRODUCT_SUCCESS:
        return {
          ...state,
          product: action.result.product,
        };
    default:
      return state;
  }
};

export default reducer;
