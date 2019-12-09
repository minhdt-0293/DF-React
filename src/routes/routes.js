import Home from '../components/Home';
import Login from '../components/Login';
import NotFound from '../components/NotFound';
import AdminCategories from '../components/Admin/Categories';
import AdminUsers from '../components/Admin/Users';
import Profile from '../components/Profile';
import AdminAddCategory from '../components/Admin/AddCategory';
import App from './../App';
import Admin from '../components/Admin/Admin';
import AdminEditCategory from '../components/Admin/EditCategory';

const routerAdmin = [
  {
    path: '/admin/categories',
    component: AdminCategories,
    exact: true
  },
  {
    path: '/admin/users',
    component: AdminUsers,
    exact: true
  },
  {
    path: '/admin/categories/add',
    name: 'AdminAddCategory',
    component: AdminAddCategory,
    exact: true
  },
  {
    path: '/admin/categories/edit/:id',
    exact: true,
    component: AdminEditCategory
  }
];

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/login',
        name: 'login',
        exact: true,
        component: Login
      },
      {
        path: '/admin',
        component: Admin,
        routes: routerAdmin
      },
      {
        path: '/profile',
        name: 'profile',
        exact: true,
        component: Profile
      },
      {
        path: '',
        exact: true,
        component: NotFound
      }
    ]
  }
];

export default routes;
