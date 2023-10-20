import {RouterProvider, createBrowserRouter} from 'react-router-dom'
// test
import Upload from './pages/Print/Upload'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import ReportRequest from './pages/Report/ReportRequest'
import CHINHSUA from './pages/CHINHSUA/edit_info'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }, {
    path: '/login',
    element:<Login/>
  }, {
    path: '/app',
    element: <Dashboard />,
    children: [
      {
        path: 'print',
        element:<Upload/>
      }, {
        path: 'report',
        element:<ReportRequest/>
      }
    ]
  },{
    path: '/edit',
    element:<CHINHSUA/>
  },
  {
    path: '*',
    element:<NoPage/>
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App
