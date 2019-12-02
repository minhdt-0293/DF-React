import { takeLatest, call, put } from 'redux-saga/effects';
import * as types from './../constants/ActionTypes';
import axios from 'axios';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* loginSaga() {
  yield takeLatest(types.LOG_IN, workerSaga);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
  const { data } = action;
  try {
    const response = yield call(authenticateUser, data);
    const result = response.data;
    // dispatch a success action to the store with the new dog
    yield put({ type: types.LOG_IN_SUCCESS, data: result });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.LOG_IN_FAILURE, error });
  }
}

// function that makes the api request and returns a Promise for response
function authenticateUser(data) {
  return axios({
    method: 'POST',
    url: 'http://localhost:3000/api/login',
    data: data
  });
}
