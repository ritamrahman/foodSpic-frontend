import React from "react";

const CTA = () => {
  return (
    <section className="bg-primary shadow-lg lg:py-12 lg:flex lg:justify-center  mx-3">
      <div className="lg:mx-8 flex-col justify-center items-center lg:flex lg:flex-row lg:max-w-2xl lg:shadow-lg lg:rounded-lg">
        <div className="lg:w-1/2">
          <div className="h-72 lg:rounded-lg lg:h-full flex justify-center items-center overflow-hidden">
            <img
              src="https://i.imagescrap.org/2022/11/08/image.png"
              alt=""
              className="-rotate-12 h-96 mt-20 lg:-mt-1 lg:h-[300px] "
            />
          </div>
        </div>

        <div className="max-w-full h-full px-6 py-12 lg:max-w-5xl bg-primary lg;bg-primary rounded-2xl shadow-2xl ">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
            Join Our <span className="text-primaryTextColor">Newslatter</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            You'll be notify when new kitchen will be added here & You will get email every Friday To out Top rader
            kitchen
          </p>

          <div className="mt-8">
            <a
              href="#"
              className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
