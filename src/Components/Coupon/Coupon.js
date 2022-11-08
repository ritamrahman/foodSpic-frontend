import React from "react";

const Coupon = () => {
  return (
    <section
      class="flex max-w-xl flex-row-reverse justify-center items-center overflow-hidden bg-secondary rounded-lg shadow-lg 
     mx-auto mt-11 pb-4"
    >
      {/* discount amount */}
      <div class="w-1/3 flex flex-col justify-center items-center">
        <h1 className="text-9xl mb-3 text-primaryTextColor font-lobster">10%</h1>
        {/* <p>
          Apply Coupon <span>PH06</span>
        </p> */}
      </div>

      <div class="w-2/3 p-4 md:p-4 flex flex-col ">
        <h1 class="text-2xl font-bold text-gray-800 text-primaryTextColor">It’s Crismas Guys</h1>

        <p class="mt-2 text-lg text-gray-600 dark:text-gray-400">
          On Every Orders You’ll Get Discount From Yours Fevorite Kitchen
        </p>
      </div>
    </section>
  );
};

export default Coupon;
