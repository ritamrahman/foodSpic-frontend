import React from "react";
import { Link } from "react-router-dom";

const Card = ({ kitchen }) => {
  return (
    <Link to={`/kitchen/${kitchen._id}`}>
      <div className="flex flex-col-reverse items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full -mt-10 px-3 h-auto bg-center bg-secondary rounded-lg shadow-md ">
          <h3 className="py-2 mt-20 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            {kitchen.kitcheNname}
          </h3>
          <p className="text-sm text-baseBlack font-Handlee font-semibold">
            {kitchen?.dessription.length > 80 ? kitchen.dessription.slice(0, 80) + "..Read More" : kitchen.dessription}
          </p>
          <div className="flex items-center justify-between px-3 py-2 mt-8 bg-gray-200">
            <span className="font-semi-bold text-gray-800">
              ৳{kitchen.minPrice}-৳{kitchen.maxPrice}
            </span>
            <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
              View details
            </button>
          </div>
        </div>

        <div className="w-56 max-h-[256px] overflow-hidden bg-white rounded-3xl z-10 shadow-lg md:w-64">
          <img src={kitchen.img} alt="" />
        </div>
      </div>
    </Link>
  );
};

export default Card;
