import { takeLatest, call, put } from 'redux-saga/effects';
import * as types from './../constants/ActionTypes';
import callApi from './call_api';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* adminUpdateProduct() {
  yield takeLatest(types.UPDATE_PRODUCT, workerUpdateSaga);
  yield takeLatest(types.FETCH_PRODUCT, workerFetchSaga);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerUpdateSaga(action) {
  try {
    const response = yield call(callAdminUpdateProduct, action.data, action.productId);
    const result = response.data;
    // dispatch a success action to the store with the new dog
    yield put({ type: types.UPDATE_PRODUCT_SUCCESS, result });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.UPDATE_PROFILE_FAILURE, error });
  }
}

function* workerFetchSaga(action) {
  try {
    const response = yield call(callAdminFetchProduct, action.id);
    const result = response.data;
    // dispatch a success action to the store with the new dog
    yield put({ type: types.FETCH_PRODUCT_SUCCESS, result });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.FETCH_PRODUCT_FAILURE, error });
  }
}

// function that makes the api request and returns a Promise for response
function callAdminUpdateProduct(category, id) {
  return callApi('PUT', `admin/products/${id}`, category);
}

function callAdminFetchProduct(id) {
  return callApi('GET', `admin/products/${id}`);
}
