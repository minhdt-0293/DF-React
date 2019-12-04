import { takeLatest, call, put } from 'redux-saga/effects';
import * as types from './../constants/ActionTypes';
import axios from 'axios';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* updateProfileSaga() {
  yield takeLatest(types.UPDATE_PROFILE, workerSaga);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
  const { data } = action;
  try {
    const response = yield call(callUpdateProfile, data);
    const result = response.data;
    // dispatch a success action to the store with the new dog
    yield put({ type: types.UPDATE_PROFILE_SUCCESS, result });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.UPDATE_PROFILE_FAILURE, error });
  }
}

// function that makes the api request and returns a Promise for response
function callUpdateProfile(data) {
  const { formData, id } = data;
  return axios({
    method: 'PATCH',
    url: `http://localhost:3000/api/users/${id}`,
    data: formData,
    headers: { token: localStorage.getItem('token') },
    dataType: 'json',
    contentType: false,
    processData: false
  });
}
