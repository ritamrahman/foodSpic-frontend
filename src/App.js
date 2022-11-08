import "./App.css";
import Coupon from "./Components/Coupon/Coupon";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="bg-primary pb-14">
      <Navbar />
      <Home />
      <Coupon />
    </div>
  );
}

export default App;
