import * as types from './../constants/ActionTypes';

const currentUser = JSON.parse(localStorage.getItem('current_user'));
const initialState = { fetching: false, error: null, currentUser: currentUser };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN:
      return { ...state, fetching: true, error: null };
    case types.LOG_IN_SUCCESS:
      const { status, user_info, jwt } = action.data;
      if (status === 'ok') {
        localStorage.setItem('current_user', JSON.stringify(user_info));
        localStorage.setItem('token', jwt);
      }
      return {
        ...state,
        fetching: false,
        error: null,
        currentUser: action.data.user_info
      };
    case types.LOG_IN_FAILURE:
      return { ...state, fetching: false, error: action.error };
    case types.UPDATE_PROFILE:
      return { ...state, fetching: true, error: null };
    case types.UPDATE_PROFILE_SUCCESS:
      localStorage.setItem(
        'current_user',
        JSON.stringify(action.data.user_info)
      );
      return {
        ...state,
        fetching: false,
        error: null,
        currentUser: action.data.user_info,
        status: 'ok'
      };
    case types.LOG_OUT:
      localStorage.removeItem('token');
      localStorage.removeItem('current_user');
      return {
        ...state,
        currentUser: null
      };
    default:
      return state;
  }
};

export default reducer;
