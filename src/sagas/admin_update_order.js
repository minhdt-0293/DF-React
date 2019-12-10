import { takeLatest, call, put } from 'redux-saga/effects';
import * as types from './../constants/ActionTypes';
import callApi from './call_api';

export function* adminUpdateOrder() {
  yield takeLatest(types.UPDATE_ORDER, workerUpdateSaga);
  yield takeLatest(types.FETCH_ORDER, workerFetchSaga);
}

function* workerUpdateSaga(action) {
  try {
    const response = yield call(callAdminUpdateOrder, action.data, action.orderId);
    const result = response.data;
    yield put({ type: types.UPDATE_ORDER_SUCCESS, result });
  } catch (error) {
    yield put({ type: types.UPDATE_ORDER_FAILURE, error });
  }
}

function* workerFetchSaga(action) {
  try {
    const response = yield call(callAdminFetchOrder, action.id);
    const result = response.data;
    yield put({ type: types.FETCH_ORDER_SUCCESS, result });
  } catch (error) {
    yield put({ type: types.FETCH_ORDER_FAILURE, error });
  }
}

function callAdminUpdateOrder(order, id) {
  return callApi('PUT', `admin/orders/${id}`, order);
}

function callAdminFetchOrder(id) {
  return callApi('GET', `admin/orders/${id}`);
}
