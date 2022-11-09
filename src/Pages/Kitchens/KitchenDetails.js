import React from "react";
import KitchenDetailsCard from "../../Components/Card/KitchenDetailsCard";

const KitchenDetails = () => {
  return (
    <div>
      <KitchenDetailsCard />
      <div className="container mx-20 py-12">
        <h2 className="text-5xl font-Handlee text-center pb-10 text-primaryTextColor">Description</h2>
        <article className="px-2 lg:px-36">
          Description is the pattern of narrative development that aims to make vivid a place, object, character, or
          group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In
          practice it would be difficult to write literature that drew on just one of the four basic modes.
        </article>
      </div>
    </div>
  );
};

export default KitchenDetails;
