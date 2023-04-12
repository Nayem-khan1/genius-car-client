import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Main from "../../layouts/Main/Main";
import Home from "../../Pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../../Pages/CheckOut/CheckOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "services/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
        element: <CheckOut></CheckOut>,
      },
      {
        path: "products/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
        element: <CheckOut></CheckOut>,
      },
    ],
  },
]);

export default router;
