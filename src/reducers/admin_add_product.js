import * as types from '../constants/ActionTypes';

const initialState = { product: {}, status: '' };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT:
      return state;
    case types.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.result.product,
        status: action.result.status
      };
    default:
      return state;
  }
};

export default reducer;
