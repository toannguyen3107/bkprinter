import {RouterProvider, createBrowserRouter} from 'react-router-dom'
// test
import Upload from './pages/Print/Upload'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import Dashboard from './pages/Dashboard/Dashboard'
import ReportRequest from './pages/Report/ReportRequest'
import Edit_info_printer from './pages/Edit_info_printer/edit_info'
import PrinterList from './pages/PrinterList/PrinterList'
import ChooseRole from './pages/Login/ChooseRole'
import Printer_List from './pages/Printer_Management/Printer_List'
import Login_for_user from './pages/Login/Login_for_user'
import Login_for_admin from './pages/Login/Login_for_admin'
import ChangePassword from './pages/Login/ChangePassword'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }, {
    path: '/login',
    element:<ChooseRole />, 
  }, {
    path: '/login_user',
    element: <Login_for_user />
  }, {
    path: '/login_admin',
    element: <Login_for_admin />
  }, {
    path: '/change_password',
    element: <ChangePassword />
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
        path: 'printer_list',
        element:<PrinterList />
      },
      {
        path: 'printer_management',
        element:<Printer_List />
      },
    ]
  },{
    path: '/edit_info_printer',
    element:<Edit_info_printer/>
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
