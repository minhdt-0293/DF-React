import { loginSaga } from './login';
import { adminCategoriesSaga } from './admin_categories';
import { all } from 'redux-saga/effects';
import { updateProfileSaga } from './update_profile';
import { adminAddCategory} from './admin_add_category';
import { adminUpdateCategory } from './admin_update_category';

export default function* rootSaga() {
  yield all([loginSaga(), adminCategoriesSaga(), updateProfileSaga(), adminAddCategory(), adminUpdateCategory()]);
}
