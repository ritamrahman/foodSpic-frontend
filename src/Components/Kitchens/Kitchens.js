import React from "react";
import Card from "../Card/Card";

const Kitchens = () => {
  return (
    <section className="my-20">
      <h1 className="font-Handlee text-secondaryBG font-bold text-3xl lg:font-7xl text-center py-9">
        Top 3 Cloud Kitchens in Bangladesh
        <div className="mt-16 mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mx-4">
          <Card />
          <Card />
          <Card />
        </div>
        <button class="px-6 py-2 font-medium tracking-wide text-primary capitalize transition-colors duration-300 transform bg-secondaryBG rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          See all Kitchens
        </button>
      </h1>
    </section>
  );
};

export default Kitchens;
