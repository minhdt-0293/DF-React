import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import * as types from './../constants/ActionTypes';
import callApi from './call_api';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* adminProductsSaga() {
  yield all([
    takeLatest(types.FETCH_PRODUCTS, workerSagaFetchProducts),
    takeLatest(types.DELETE_PRODUCT, workerSagaDeleteProducts)
  ]);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSagaFetchProducts(action) {
  const { data } = action;
  try {
    const response = yield call(fetchProducts, data);
    const result = response.data;

    // dispatch a success action to the store with the new dog
    yield put({ type: types.FETCH_PRODUCTS_SUCCESS, data: result });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.FETCH_PRODUCTS_FAILURE, error });
  }
}

// function that makes the api request and returns a Promise for response
function fetchProducts(data) {
  return callApi('GET', 'admin/products', data);
}

function* workerSagaDeleteProducts(action) {
  const { data } = action;
  try {
    const response = yield call(deleteProducts, data);
    const result = response.data;

    // dispatch a success action to the store with the new dog
    yield put({ type: types.DELETE_PRODUCT_SUCCESS, data: result });
    const selectCurrentPage = state => state.adminProducts.currentPage;
    const currentPage = yield select(selectCurrentPage);
    if (currentPage > result.total_pages)
      yield put({
        type: types.SET_CURRENT_PAGE,
        currentPage: result.total_pages
      });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.DELETE_PRODUCT_FAILURE, error });
  }
}

function deleteProducts(data) {
  return callApi('DELETE', 'admin/products/' + data.productId, {
    page: data.page
  });
}
