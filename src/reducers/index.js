import { combineReducers } from 'redux';
import adminCategories from './admin_categories';
import user from './user';
import adminInfo from './admin_info';
import categories from './categories';
import adminAddCategory from './admin_add_categoy';
import adminUpdateCategory from './admin_edit_category';
import adminProducts from './admin_products';

const reducer = combineReducers({
  adminCategories,
  user,
  adminInfo,
  categories,
  adminAddCategory,
  adminUpdateCategory,
  adminProducts
});

export default reducer;
