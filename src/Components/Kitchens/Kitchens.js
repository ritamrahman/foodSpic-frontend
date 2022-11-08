import React from "react";
import Card from "../Card/Card";

const Kitchens = () => {
  return (
    <section className="my-20">
      <h1 className="font-Handlee text-secondaryBG font-bold text-3xl lg:font-7xl text-center py-9">
        Top 3 Cloud Kitchens in Bangladesh
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mx-4">
          <Card />
          <Card />
          <Card />
        </div>
      </h1>
    </section>
  );
};

export default Kitchens;
