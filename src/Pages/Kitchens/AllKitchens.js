import React from "react";
import Card from "../../Components/Card/Card";

const AllKitchens = () => {
  return (
    <section className="my-20">
      <h1 className="font-Handlee text-secondaryBG font-bold text-3xl lg:font-7xl text-center py-9">
        Find the Best Kitchen From Here By reading the other users review
        <div className="mt-16 mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mx-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </h1>
    </section>
  );
};

export default AllKitchens;
