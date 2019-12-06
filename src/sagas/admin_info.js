import { takeLatest, call, put } from 'redux-saga/effects';
import * as types from './../constants/ActionTypes';
import callApi from './call_api';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* adminInfoSaga() {
  yield takeLatest(types.FETCH_ADMIN_INFO, workerSaga);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
  const { data } = action;
  try {
    const response = yield call(fetchAdminInfo, data);
    const result = response.data;
    yield put({ type: types.FETCH_ADMIN_INFO_SUCCESS, data: result });
  } catch (error) {}
}

// function that makes the api request and returns a Promise for response
function fetchAdminInfo() {
  return callApi('GET', 'admin/dashboard');
}
