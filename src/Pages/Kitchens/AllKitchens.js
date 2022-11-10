import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../Components/Card/Card";
import MetaData from "../../Components/Layout/MetaData";

const AllKitchens = () => {
  const allKitchens = useLoaderData();
  console.log(allKitchens);
  return (
    <>
      <MetaData title="All Kitchens" />;
      <section className="my-20">
        <h1 className="font-Handlee text-secondaryBG font-bold text-3xl lg:font-7xl text-center py-9">
          Find the Best Kitchen From Here By reading the other users review
          <div className="mt-16 mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mx-4">
            {!allKitchens
              ? "Loading"
              : allKitchens.map((kitchen) => {
                  return <Card key={kitchen._id} kitchen={kitchen} />;
                })}
          </div>
        </h1>
      </section>
    </>
  );
};

export default AllKitchens;
