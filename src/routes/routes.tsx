import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { adminPaths } from './admin.routes';
import { RouteGenerater } from '../utils/routeGenaretor';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/admin',
    element: <App />,
    children: RouteGenerater(adminPaths),
  },
  {
    path: '/faculty',
    element: <App />,
    children: RouteGenerater(adminPaths),
  },
  {
    path: '/student',
    element: <App />,
    children: RouteGenerater(adminPaths),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

export default router;
