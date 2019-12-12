import { combineReducers } from 'redux';
import adminCategories from './admin_categories';
import user from './user';
import adminInfo from './admin_info';
import categories from './categories';

const reducer = combineReducers({
  adminCategories,
  user,
  adminInfo,
  categories
});

export default reducer;
