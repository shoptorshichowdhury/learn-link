import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import AllServices from "../pages/AllServices";

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
    ],
  },
]);

export default router;
