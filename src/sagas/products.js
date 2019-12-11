import { takeLatest, call, put } from 'redux-saga/effects';
import * as types from './../constants/ActionTypes';
import callApi from './call_api';

export function* productsSaga() {
  yield takeLatest(types.FETCH_PRODUCTS_BY_CATEGORY, workerSaga);
}

function* workerSaga(action) {
  const { categoryId, productType } = action;
  try {
    const response = yield call(fetchProducts, categoryId, productType);
    const result = response.data;
    yield put({ type: types.FETCH_PRODUCTS_BY_CATEGORY_SUCCESS, data: result });
  } catch (error) {}
}

function fetchProducts(categoryId, productType) {
  return callApi('GET', 'products', {
    category_id: categoryId,
    product_type: productType
  });
}
