import * as types from './../constants/ActionTypes';

export const logIn = data => {
  return {
    type: types.LOG_IN,
    data
  };
};
