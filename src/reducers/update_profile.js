import * as types from './../constants/ActionTypes';

const initialState = { status: '', current_user: {} };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PROFILE:
      return state;
    case types.UPDATE_PROFILE_SUCCESS:
      localStorage.setItem(
        'current_user',
        JSON.stringify(action.result.user_info)
      );

      return {
        ...state,
        current_user: action.result.user_info,
        status: action.result.status
      };
    default:
      return state;
  }
};

export default reducer;
