import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Carrers from "../../Pages/Carrers";
import NotFound from "../../Pages/NotFound";
import Layout from "../../Pages/Layout";
//  yeh createBrowserRouter ek method hai react ka jo apne argument mein array of objects accept krta hai and yeh Context ki tarah hi hai .


let myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/carrers",
        element: <Carrers />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);
const Routing2 = () => {
  return <RouterProvider router={myRoutes}></RouterProvider>;
};

export default Routing2;
