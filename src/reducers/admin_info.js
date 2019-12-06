import * as types from './../constants/ActionTypes';

const initialState = { adminInfo: {} };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ADMIN_INFO:
      return state;
    case types.FETCH_ADMIN_INFO_SUCCESS:
      return {
        ...state,
        adminInfo: action.data
      };
    default:
      return state;
  }
};

export default reducer;
