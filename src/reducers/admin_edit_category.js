import * as types from './../constants/ActionTypes';

const initialState = { category: {}, status: '', statusFetch: '' };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_CATEGORY:
      return state;
    case types.UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.result.category,
        status: action.result.status
      };
    case types.FETCH_CATEGORY:
      return state;
    case types.FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.result.category,
        statusFetch: action.result.status
      };
    case types.CLEAR_OLD_CATEGORY:
      return {
        ...state,
        category: {},
        status: '',
        statusFetch: ''
      };
    default:
      return state;
  }
};

export default reducer;
