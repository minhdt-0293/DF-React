import { combineReducers } from 'redux';
import adminCategories from './admin_categories';
import user from './user';
import adminInfo from './admin_info';
import categories from './categories';
import AdminAddCategory from './admin_add_categoy';
const reducer = combineReducers({
  adminCategories,
  user,
  adminInfo,
  categories,
  AdminAddCategory
});

export default reducer;
