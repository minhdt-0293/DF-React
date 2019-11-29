import Home from '../components/Home';
import Login from '../components/Login';
import NotFound from '../components/NotFound';
// import Root from '../components/Root';
import App from './../App';

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
        path: '',
        exact: true,
        component: NotFound
      }
    ]
  }
];

export default routes;
