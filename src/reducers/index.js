import { combineReducers } from 'redux';
import adminCategories from './admin_categories';
import user from './user';
import adminInfo from './admin_info';
import categories from './categories';
import adminAddCategory from './admin_add_category';
import adminUpdateCategory from './admin_edit_category';
import adminProducts from './admin_products';
import adminUpdateProduct from './admin_edit_product';
import adminAddProduct from './admin_add_product';
import adminOrders from './admin_orders';
import adminUpdateOrder from './admin_edit_order';

const reducer = combineReducers({
  adminCategories,
  user,
  adminInfo,
  categories,
  adminAddCategory,
  adminUpdateCategory,
  adminProducts,
  adminUpdateProduct,
  adminAddProduct,
  adminOrders,
  adminUpdateOrder
});

export default reducer;
