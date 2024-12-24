import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import AllServices from "../pages/AllServices";
import AddService from "../pages/AddService";
import SingleServiceDetails from "../pages/SingleServiceDetails";
import BookService from "../pages/BookService";
import ManageService from "../pages/ManageService";
import UpdateService from "../pages/UpdateService";
import AllBookedServices from "../pages/AllBookedServices";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <p>Error..!</p>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allServices",
        element: <AllServices />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "/services/id",
        element: (
          <PrivateRoute>
            <SingleServiceDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/bookService/id",
        element: (
          <PrivateRoute>
            <BookService />
          </PrivateRoute>
        ),
      },
      {
        path: "/manageService",
        element: (
          <PrivateRoute>
            <ManageService />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateService",
        element: (
          <PrivateRoute>
            <UpdateService />
          </PrivateRoute>
        ),
      },
      {
        path: "/allBookedServices",
        element: (
          <PrivateRoute>
            <AllBookedServices />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
