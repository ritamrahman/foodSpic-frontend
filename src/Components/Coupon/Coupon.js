import React from "react";

const Coupon = () => {
  return (
    <section
      className=" flex max-w-xl flex-col lg:flex-row-reverse md:flex-row-reverse justify-center items-center overflow-hidden bg-secondary rounded-lg shadow-lg 
     lg:mx-auto mt-11 pb-4 mx-6"
    >
      {/* discount amount */}
      <div className="w-1/3 flex flex-col justify-center items-center">
        <h1 className="text-9xl mb-3 text-primaryTextColor font-lobster">10%</h1>
        {/* <p>
          Apply Coupon <span>PH06</span>
        </p> */}
      </div>

      <div className="lg:w-2/3 p-4 w-full md:p-4 flex flex-col ">
        <h1 className="text-2xl font-bold text-gray-800 text-primaryTextColor">It’s Crismas Guys</h1>

        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          On Every Orders You’ll Get Discount From Yours Fevorite Kitchen
        </p>
      </div>
    </section>
  );
};

export default Coupon;
