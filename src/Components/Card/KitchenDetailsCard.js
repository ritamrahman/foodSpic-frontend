import React from "react";
import { PhotoView } from "react-photo-view";

const KitchenDetailsCard = ({ KitchenDetails }) => {
  return (
    <div className="px-4 py-16 my-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-1 bg-secondary lg:rounded-r-[50px] lg:rounded-rb-[50px] lg:rounded-lt-xl lg:rounded-lb-xl">
      <div className="grid gap-5 row-gap-10 lg:grid-cols-2 ">
        {/* details */}
        <div className="flex flex-col justify-center items-center order-2">
          <div className="max-w-xl mb-6">
            <div>
              {/* kitchen name */}
              <h2 className="text-5xl font-Handlee text-center pb-10 text-primaryTextColor">
                {KitchenDetails.kitcheNname}
              </h2>
            </div>
            {/* chef name */}
            <div className="text-center">
              <span className="text-2xl font-Handlee pr-3 font-extrabold ">Chef’s Name:</span>
              <span className="text-2xl font-Handlee font-extrabold ">{KitchenDetails.chefsName}</span>
            </div>
            {/* stats */}
            <div className="flex justify-around items-center my-11 font-Handlee text-center">
              {/* complete order */}
              <div>
                <p>Total Completes Orders</p>
                <span>300</span>
              </div>
              {/* reviews count */}
              <div>
                <p>Total Reviews</p>
                <span>100</span>
              </div>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="imageDiv max-h-96 ">
          <PhotoView src={KitchenDetails.img}>
            <img
              className="object-cover w-full h-full py-5  lg:rounded-[70px] md:rounded-[70px] aspect-video sm:h-96 "
              src={KitchenDetails.img}
              alt=""
            />
          </PhotoView>
        </div>
      </div>
    </div>
  );
};

export default KitchenDetailsCard;
