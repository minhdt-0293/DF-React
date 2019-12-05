import { takeLatest, call, put } from 'redux-saga/effects';
import * as types from './../constants/ActionTypes';
import callApi from './call_api';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* adminAddCategory() {
  yield takeLatest(types.ADD_CATEGORY, workerSaga);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
  const { data } = action;
  try {
    const response = yield call(callAdminAddCategory, data);
    const result = response.data;
    // dispatch a success action to the store with the new dog
    yield put({ type: types.ADD_CATEGORY_SUCCESS, result });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.ADD_CATEGORY_FAILURE, error });
  }
}

// function that makes the api request and returns a Promise for response
function callAdminAddCategory(category) {
  return callApi('POST', 'categories', category);
}
