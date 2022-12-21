import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import Navbar from "../Navbar/Navbar";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(setIsLoading(false), 9000);
  }, []);

  return (
    <div>
      {isLoading === true ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          {/* <div className="w-full pt-20 bg-white dark:bg-midnight"> */}
          <Outlet />
          {/* </div> */}
          <Footer />
        </>
      )}
    </div>
  );
};

export default Main;
