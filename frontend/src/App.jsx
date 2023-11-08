import { RouterProvider, createBrowserRouter } from "react-router-dom";
// test

import Overall from "./pages/Report/Overall";
import Details from "./pages/Report/Details";

import Edit_info_printer from "./pages/Edit_info_printer/edit_info";
import PrinterList from "./pages/PrinterList/PrinterList";
import Upload from "./pages/Print/Upload";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import ChooseRole from './pages/Login/ChooseRole'
import Printer_List from './pages/Printer_Management/Printer_List'
import Login_for_user from './pages/Login/Login_for_user'
import Login_for_admin from './pages/Login/Login_for_admin'
import ChangePassword from './pages/Login/ChangePassword'
import Dashboard from "./pages/Dashboard/Dashboard";
import ReportRequest from "./pages/Report/ReportRequest";
import { UserViewLog } from "./pages/viewLog/User/UserViewLog";
import { AdminViewLog } from "./pages/viewLog/Admin/AdminViewLog";
import { AllUser } from "./pages/viewLog/Admin/AllUser/AllUser";
import { FilterByName } from "./pages/viewLog/Admin/FilterByName/FilterByName";
import { FilterByPrinter } from "./pages/viewLog/Admin/FilterByPrinter/FilterByPrinter";

import HomePage from "./pages/HomePage/HomePage";
import { Feedback } from "./pages/Feedback";
import { CreateTicket } from "./pages/Feedback/CreateTicket";
import { Ticket } from "./pages/Feedback/TicketList";
import { TicketDetail } from "./pages/Feedback/TicketDetail";
import { SampleQuest } from "./pages/Feedback/AllQuest";
import { Bill } from "./pages/Bill";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
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
  },
  {
    path: "/app",
    element: <Dashboard />,
    children: [
      {
        path: "print",
        element: <Upload />,
      },
      {
        path: "report",
        element: <ReportRequest />,
        children: [
          {
            path: "overall",
            element: <Overall />,
          },
          {
            path: "details",
            element: <Details />,
          },
        ],
      },
      {
        path: "printer_list",
        element: <PrinterList />,
      },
      {
        path: 'printer_management',
        element:<Printer_List />
      },
      {
        path: "contact",
        element: <Feedback />,
      },
      {
        path: "UserViewLog",
        element: <UserViewLog />,
      },
      {
        path: "AdminViewLog",
        element: <AdminViewLog />,
      },
      {
        path: "viewAllUser",
        element: <AllUser />,
      },
      {
        path: "FilterByName",
        element: <FilterByName />,
      },
      {
        path: "FilterByPrinter",
        element: <FilterByPrinter />,
      },
      {
        path: "create-ticket",
        element: <CreateTicket />,
      },
      {
        path: "ticket",
        element: <Ticket />,
      },
      {
        path: "ticket-view/:id",
        element: <TicketDetail />,
      },
      {
        path: "sample-ticket",
        element: <SampleQuest />,
      },
      {
        path: "bill",
        element: <Bill />,
      },
    ],
  },
  {
    path: "/edit_info_printer",
    element: <Edit_info_printer />,
  },
  {
    path: "/homepage",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <NoPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
