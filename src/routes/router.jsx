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
        path: "/addService",
        element: <AddService />,
      },
      {
        path: "/services/id",
        element: <SingleServiceDetails />,
      },
      {
        path: "/bookService/id",
        element: <BookService />,
      },
      {
        path: "/manageService",
        element: <ManageService />,
      },
      {
        path: "/updateService",
        element: <UpdateService />,
      },
      {
        path: "/allBookedServices",
        element: <AllBookedServices />,
      },
    ],
  },
]);

export default router;
