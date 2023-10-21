import {RouterProvider, createBrowserRouter} from 'react-router-dom'
// test
import Upload from './pages/Print/Upload'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import ReportRequest from './pages/Report/ReportRequest'
import Edit_info_pritner from './pages/Edit_info_printer/edit_info'
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
        path: 'report',
        element:<ReportRequest/>
      },
      {
        path: 'printerlist',
        element:<PrinterList />
      },
    ]
  },{
    path: '/edit_info_printer',
    element:<Edit_info_pritner/>
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
