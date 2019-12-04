import { combineReducers } from 'redux';
import login from './login';
import adminCategories from './admin_categories';
import update_profile from './update_profile';


const reducer = combineReducers({
  login,
  adminCategories,
  update_profile
});

export default reducer;
