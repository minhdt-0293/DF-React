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
import AdminProducts from '../components/Admin/Products';
import AdminEditProduct from '../components/Admin/EditProduct';
import AdminAddProduct from '../components/Admin/AddProduct';
import AdminOrders from '../components/Admin/Orders';
import AdminEditOrder from '../components/Admin/EditOrder';
import Product from '../components/Product';

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
    component: AdminAddCategory,
    exact: true
  },
  {
    path: '/admin/categories/edit/:id',
    exact: true,
    component: AdminEditCategory
  },
  {
    path: '/admin/products',
    component: AdminProducts,
    exact: true
  },
  {
    path: '/admin/products/edit/:id',
    exact: true,
    component: AdminEditProduct
  },
  {
    path: '/admin/products/add',
    component: AdminAddProduct,
    exact: true
  },
  {
    path: '/admin/orders',
    component: AdminOrders,
    exact: true
  },
  {
    path: '/admin/orders/edit/:id',
    exact: true,
    component: AdminEditOrder
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
        path: '/products/:id',
        name: 'product',
        exact: true,
        component: Product
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
