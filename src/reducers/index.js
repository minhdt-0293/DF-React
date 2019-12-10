import { combineReducers } from 'redux';
import adminCategories from './admin_categories';
import user from './user';
import adminInfo from './admin_info';
import adminAddCategory from './admin_add_category';
import adminUpdateCategory from './admin_edit_category';
import adminProducts from './admin_products';
import adminUpdateProduct from './admin_edit_product';
import adminAddProduct from './admin_add_product';

const reducer = combineReducers({
  adminCategories,
  user,
  adminInfo,
  adminAddCategory,
  adminUpdateCategory,
  adminProducts,
  adminUpdateProduct,
  adminAddProduct
});

export default reducer;
