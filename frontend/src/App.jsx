import { RouterProvider, createBrowserRouter } from "react-router-dom";
// test
import Overall from "./pages/Report/Overall";
import Details from "./pages/Report/Details";

import Edit_info_pritner from "./pages/Edit_info_printer/edit_info";
import PrinterList from "./pages/PrinterList/PrinterList";
import Upload from './pages/Print/Upload'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import ReportRequest from './pages/Report/ReportRequest'
import HomePage from './pages/HomePage/HomePage'
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
    path: "/login",
    element: <Login />,
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
        path: "printerlist",
        element: <PrinterList />,
      },
      {
        path: 'contact',
        element: <Feedback />
      },
      {
        path: 'create-ticket',
        element: <CreateTicket />
      },
      {
        path: 'ticket',
        element: <Ticket />
      },
      {
        path: 'ticket-view/:id',
        element: <TicketDetail />
      },
      {
        path: 'sample-ticket',
        element: <SampleQuest/>
      },
      {
        path: 'bill',
        element: <Bill />
      }
    ],
  },
  {
    path: "/edit_info_printer",
    element: <Edit_info_pritner />,
  },
  {
    path: '/homepage',
    element:<HomePage />
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
