import { loginSaga } from './login';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([loginSaga()]);
}
