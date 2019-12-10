import { combineReducers } from 'redux';
import adminCategories from './admin_categories';
import user from './user';
import adminInfo from './admin_info';
import adminProducts from './admin_products';

const reducer = combineReducers({
  adminCategories,
  user,
  adminInfo,
  adminProducts
});

export default reducer;
