import { combineReducers } from 'redux';
import adminCategories from './admin_categories';
import user from './user';

const reducer = combineReducers({
  adminCategories,
  user
});

export default reducer;
