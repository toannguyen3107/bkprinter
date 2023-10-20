import {RouterProvider, createBrowserRouter} from 'react-router-dom'
// test
import Upload from './pages/Print/Upload'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import PrinterList from './pages/PrinterList/PrinterList'

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
      },
      {
        path: 'printerlist',
        element:<PrinterList />
      }
    ]
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
