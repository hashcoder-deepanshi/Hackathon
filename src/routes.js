import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import Chatroom from './pages/Chatroom';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import Feedback from "./pages/Feedback"
import Profile from './pages/Profile';
import Map from './pages/Map';
import Track from './pages/Track';
import FamTrack from './pages/FamTrack';
import UserDash from './pages/UserDash';
import Payment from './pages/Payment';

import DriverProfile from './pages/DriverProfile';
import Home from './pages/Landing/Home'

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <UserDash /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path:"feedback", element:<Feedback/>},
        { path:"profile", element:<Profile/>},
        { path:"chatroom", element:<Chatroom/>},
        { path:"map",element:<Map/>},
        { path:"track",element:<Track/>},
        { path:"famtrack",element:<FamTrack/>}

      ],
    },
    {
      path: '/driverdashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/driverdashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path:"profile", element:<DriverProfile/>},
        { path:"feedback", element:<Feedback/>},
        { path:"chatroom", element:<Chatroom/>}
      ],
    },
    {
      path: 'payment',
      element: <Payment />
    },
    {
      path: 'login',
      element: <LoginPage />
    },
    {
      path: 'map',
      element: <Map />
    },    
    {
      path: 'track',
      element: <Track />
    },

  ]);

  return routes;
}
