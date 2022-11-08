import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Main from "../Components/Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllKitchens from "../Pages/Kitchens/AllKitchens";
import KitchenDetails from "../Pages/Kitchens/KitchenDetails";
import Kitchens from "../Components/Kitchens/Kitchens";
import CTA from "../Components/CTA/CTA";
import Coupon from "../Components/Coupon/Coupon";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: [<Home />, <Coupon />, <Kitchens />, <CTA />],
      },
      {
        path: "/allKitchens",
        element: <AllKitchens />,
      },
      {
        path: "/kitchen/:id",
        element: <KitchenDetails />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);