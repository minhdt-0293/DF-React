import { takeLatest, call, put } from 'redux-saga/effects';
import * as types from './../constants/ActionTypes';
import callApi from './call_api';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* adminUpdateCategory() {
  yield takeLatest(types.UPDATE_CATEGORY, workerUpdateSaga);
  yield takeLatest(types.FETCH_CATEGORY, workerFetchSaga);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerUpdateSaga(action) {
  try {
    const response = yield call(callAdminUpdateCategory, action.data, action.categoryId);
    const result = response.data;
    // dispatch a success action to the store with the new dog
    yield put({ type: types.UPDATE_CATEGORY_SUCCESS, result });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.UPDATE_PROFILE_FAILURE, error });
  }
}

function* workerFetchSaga(action) {
  try {
    const response = yield call(callAdminFetchCategory, action.id);
    const result = response.data;
    // dispatch a success action to the store with the new dog
    yield put({ type: types.FETCH_CATEGORY_SUCCESS, result });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.FETCH_CATEGORY_FAILURE, error });
  }
}

// function that makes the api request and returns a Promise for response
function callAdminUpdateCategory(category, id) {
  return callApi('PUT', `admin/categories/${id}`, category);
}

function callAdminFetchCategory(id) {
  return callApi('GET', `admin/categories/${id}`);
}
