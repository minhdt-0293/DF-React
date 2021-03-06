import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import * as types from './../constants/ActionTypes';
import callApi from './call_api';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* adminCategoriesSaga() {
  yield all([
    takeLatest(types.FETCH_CATEGORIES, workerSagaFetchCategories),
    takeLatest(types.DELETE_CATEGORY, workerSagaDeleteCategories),
    takeLatest(types.ALL_CATEGORIES, workerSagaAllCategories)
  ]);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSagaFetchCategories(action) {
  const { data } = action;
  try {
    const response = yield call(fetchCategories, data);
    const result = response.data;

    // dispatch a success action to the store with the new dog
    yield put({ type: types.FETCH_CATEGORIES_SUCCESS, data: result });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.FETCH_CATEGORIES_FAILURE, error });
  }
}

// function that makes the api request and returns a Promise for response
function fetchCategories(data) {
  return callApi('GET', 'admin/categories', data);
}

function* workerSagaDeleteCategories(action) {
  const { data } = action;
  try {
    const response = yield call(deleteCategories, data);
    const result = response.data;

    // dispatch a success action to the store with the new dog
    yield put({ type: types.DELETE_CATEGORY_SUCCESS, data: result });
    const selectCurrentPage = state => state.adminCategories.currentPage;
    const currentPage = yield select(selectCurrentPage);
    if (currentPage > result.total_pages)
      yield put({
        type: types.SET_CURRENT_PAGE,
        currentPage: result.total_pages
      });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.DELETE_CATEGORY_FAILURE, error });
  }
}

function deleteCategories(data) {
  return callApi('DELETE', 'admin/categories/' + data.categoryId, {
    page: data.page
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSagaAllCategories(action) {
  const { data } = action;
  try {
    const response = yield call(fetchAllCategories, data);
    const result = response.data;

    // dispatch a success action to the store with the new dog
    yield put({ type: types.ALL_CATEGORIES_SUCCESS, data: result });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.ALL_CATEGORIES_SUCCESS, error });
  }
}

// function that makes the api request and returns a Promise for response
function fetchAllCategories() {
  return callApi('GET', 'admin/all/categories');
}
