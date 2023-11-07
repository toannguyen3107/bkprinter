import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Overall from "./pages/Report/Overall";
import Details from "./pages/Report/Details";
import Edit_info_pritner from "./pages/Edit_info_printer/edit_info";
import PrinterList from "./pages/PrinterList/PrinterList";
import Upload from "./pages/Print/Upload";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
// import Login from "./pages/Login/Login";
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

import DashboardAdmin from "./pages/Dashboard/DashboardAdmin";


const isAdmin = true; // admin or user?

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  {
    path: "/app",
    element: isAdmin? <DashboardAdmin /> : <Dashboard />,
    children: isAdmin? [
      {
        path: "AdminViewLog",
        element: <AdminViewLog />,
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
        path: "edit_info_printer",
        element: <Edit_info_pritner />,
      },
    ]:[
      {
        path: "print",
        element: <Upload />,
      },
      {
        path: "printerlist",
        element: <PrinterList />,
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
      {
        path: "viewAllUser",
        element: <AllUser />,
      }
    ]
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
