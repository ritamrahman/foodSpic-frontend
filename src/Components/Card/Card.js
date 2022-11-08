import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center w-full max-w-sm mx-auto">
      <div className="w-full -mt-10 px-3 h-auto bg-center bg-secondary rounded-lg shadow-md ">
        <h3 className="py-2 mt-20 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
          Kilo Biryani
        </h3>
        <p className="text-sm text-baseBlack font-Handlee font-semibold">
          Kilo Biryani prides itself in using the most fresh, highest quality ingredients and most stringent qualit ys
          checks & processes for preparing our food...Read More
        </p>
        <div className="flex items-center justify-between px-3 py-2 mt-8 bg-gray-200">
          <span className="font-semi-bold text-gray-800">৳129-৳2000</span>
          <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
            View details
          </button>
        </div>
      </div>

      <div className="w-56 overflow-hidden bg-white rounded-3xl z-10 shadow-lg md:w-64">
        <img src="https://i.imagescrap.org/2022/11/08/Biryani-By-Kilo.webp" alt="" />
      </div>
    </div>
  );
};

export default Card;
