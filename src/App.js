import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";
import Coupon from "./Components/Coupon/Coupon";
import CTA from "./Components/CTA/CTA";
import Footer from "./Components/Footer/Footer";
import Kitchens from "./Components/Kitchens/Kitchens";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="max-w-[1500px] mx-auto bg-primary ">
      {/* <Navbar />
      <Home />
      <Coupon />
      <Kitchens />
      <CTA />
      <Footer /> */}
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
