import { takeLatest, call, put } from 'redux-saga/effects';
import * as types from './../constants/ActionTypes';
import callApi from './call_api';

export function* categoriesSaga() {
  yield takeLatest(types.FETCH_CATEGORIES_NU, workerSaga);
}

function* workerSaga(action) {
  const { data } = action;
  try {
    const response = yield call(fetchCategories, data);
    const result = response.data;
    yield put({ type: types.FETCH_CATEGORIES_SUCCESS_NU, data: result });
  } catch (error) {}
}

function fetchCategories() {
  return callApi('GET', 'categories');
}
