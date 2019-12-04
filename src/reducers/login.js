import * as types from './../constants/ActionTypes';

const initialState = { fetching: false, error: null };

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

      return { ...state, fetching: false, error: null, data: action.data };
    case types.LOG_IN_FAILURE:
      return { ...state, fetching: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
