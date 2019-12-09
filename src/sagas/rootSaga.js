import { loginSaga } from './login';
import { adminCategoriesSaga } from './admin_categories';
import { all } from 'redux-saga/effects';
import { updateProfileSaga } from './update_profile';
import { adminInfoSaga } from './admin_info';
import { categoriesSaga } from './categories';
import { productsSaga } from './products';
import { adminAddCategory} from './admin_add_category';
import { adminUpdateCategory } from './admin_update_category';
import { adminProductsSaga } from './admin_products';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    adminCategoriesSaga(),
    updateProfileSaga(),
    adminInfoSaga(),
    categoriesSaga(),
    productsSaga(),
    adminAddCategory(),
    adminUpdateCategory(),
    adminProductsSaga()
  ]);
}
