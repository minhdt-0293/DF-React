import { loginSaga } from './login';
import { adminCategoriesSaga } from './admin_categories';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([loginSaga(), adminCategoriesSaga()]);
}
