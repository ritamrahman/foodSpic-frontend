import React from "react";
import KitchenDetailsCard from "../../Components/Card/KitchenDetailsCard";
import ReviewCard from "../../Components/Card/ReviewCard";
import ReviewForm from "../../Components/Review/ReviewForm";

const KitchenDetails = () => {
  return (
    <div>
      <KitchenDetailsCard />
      <div className="container mx-auto py-12">
        <h2 className="text-5xl font-Handlee text-center pb-10 text-primaryTextColor">Description</h2>
        <article className="px-2 lg:px-36">
          Description is the pattern of narrative development that aims to make vivid a place, object, character, or
          group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In
          practice it would be difficult to write literature that drew on just one of the four basic modes.
        </article>
        {/* review container */}
        <div className=" mt-32 py-20 bg-primary rounded-lg bottom-3 shadow-lg ">
          <ReviewForm />

          <div className="bg-secondary py-10">
            <div className="border-l-4 border-secondaryBG ml-10 rounded-xl">
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitchenDetails;
