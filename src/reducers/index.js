import { combineReducers } from 'redux';
import login from './login';
import adminCategories from './admin_categories';

const reducer = combineReducers({
  login,
  adminCategories
});

export default reducer;
