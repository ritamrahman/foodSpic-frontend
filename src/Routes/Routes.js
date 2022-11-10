import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Main from "../Components/Layout/Main";
import AllKitchens from "../Pages/Kitchens/AllKitchens";
import KitchenDetails from "../Pages/Kitchens/KitchenDetails";
import Kitchens from "../Components/Kitchens/Kitchens";
import CTA from "../Components/CTA/CTA";
import Coupon from "../Components/Coupon/Coupon";
import MyReviews from "../Pages/MyReviews/MyReviews";
import AddKitchen from "../Pages/AddKitchen/AddKitchen";
import { api } from "../api/api";

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
        loader: () => fetch(`${api}/allkitchens`),
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
        path: "/myreviews",
        element: <MyReviews />,
      },
      {
        path: "/addkitchen",
        element: <AddKitchen />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
