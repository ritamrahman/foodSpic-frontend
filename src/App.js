import "./App.css";
import Coupon from "./Components/Coupon/Coupon";
import CTA from "./Components/CTA/CTA";
import Kitchens from "./Components/Kitchens/Kitchens";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="max-w-[1500px] mx-auto bg-primary pb-14">
      <Navbar />
      <Home />
      <Coupon />
      <Kitchens />
      <CTA />
    </div>
  );
}

export default App;
