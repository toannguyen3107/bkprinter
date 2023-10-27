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
import { UserViewLog } from './pages/viewLog/User/UserViewLog'
import { AdminViewLog } from './pages/viewLog/Admin/AdminViewLog'
import { AllUser } from './pages/viewLog/Admin/AllUser/AllUser'
import { FilterByName} from './pages/viewLog/Admin/FilterByName/FilterByName'
import { FilterByPrinter } from './pages/viewLog/Admin/FilterByPrinter/FilterByPrinter'
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
      {
        path: 'UserViewLog',
        element: <UserViewLog />
      }, {
        path: 'AdminViewLog',
        element: <AdminViewLog  />,
      }, {
        path: 'viewAllUser',
        element: <AllUser />
      },{
        path: 'FilterByName',
        element: <FilterByName />
      }, {
        path: 'FilterByPrinter',
        element: <FilterByPrinter />
      }
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
