import Home from '../components/Home';
import Login from '../components/Login';
import NotFound from '../components/NotFound';
import AdminCategories from '../components/Admin/Categories';
import AdminUsers from '../components/Admin/Users';
import NewAdminCategory from '../components/Admin/NewAdminCategory';
import Profile from '../components/Profile';
import App from './../App';
import Admin from '../components/Admin/Admin';

const routerAdmin = [
  {
    path: '/admin/categories',
    component: AdminCategories,
    exact: true
  },
  {
    path: '/admin/categories/new',
    exact: true,
    component: NewAdminCategory,
  },
  {
    path: '/admin/users',
    component: AdminUsers,
    exact: true
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
