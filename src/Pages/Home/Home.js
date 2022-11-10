import React from "react";
import Coupon from "../../Components/Coupon/Coupon";
import CTA from "../../Components/CTA/CTA";
import Hero from "../../Components/Hero/Hero";
import Kitchens from "../../Components/Kitchens/Kitchens";
import MetaData from "../../Components/Layout/MetaData";

const Home = () => {
  return (
    <>
      <MetaData title="FoodSpic" />
      <Hero />, <Coupon />, <Kitchens />, <CTA />
    </>
  );
};

export default Home;
