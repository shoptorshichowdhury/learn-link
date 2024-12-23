import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <p>Error..!</p>,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export default router;
