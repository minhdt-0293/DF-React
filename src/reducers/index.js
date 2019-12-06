import { combineReducers } from 'redux';
import adminCategories from './admin_categories';
import user from './user';
import adminInfo from './admin_info';

const reducer = combineReducers({
  adminCategories,
  user,
  adminInfo
});

export default reducer;
