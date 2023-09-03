import './App.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar"
import Dashboard from './pages/dashboard/Dashboard';
import Events from './pages/events/Events';

const App = () => {

  const Layout = () => {
    return (
      <div className="layout" style={{ display: 'flex' }}>
        <Sidebar />
        <Outlet />
      </div>
    )


  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard />
        },
        {
          path: '/events',
          element: <Events />
        }
      ]
    },
  ]);


  return <RouterProvider router={router} />
}

export default App