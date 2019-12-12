import * as types from '../constants/ActionTypes';

const initialState = { category: {}, status: '' };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CATEGORY:
      return state;
    case types.ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.result.category,
        status: action.result.status
      };
    default:
      return state;
  }
};

export default reducer;
