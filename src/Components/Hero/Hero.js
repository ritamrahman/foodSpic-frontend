import React from "react";

const Hero = () => {
  return (
    <section className=" px-6 mx-auto bg-primary">
      <div className="items-center lg:flex">
        <div className="relative w-full flex lg:justify-between justify-center items-center">
          <div className="lg:max-w-2xl md:max-w-4xl pt-16 lg:pb-56 text-center">
            <h1 className="text-xl lg:leading-[70px] font-Handlee text-primaryTextColor tracking-widest uppercase lg:text-5xl md:text-3xl">
              It’s not just food, it’s an EXPERIENCE
            </h1>
            <p className="pt-5 text-sm lg:text-lg">
              Here you can find Bangladesh all of the Cloud-Kitchen. Before order any food of any Kitchen please see the
              reviews first
            </p>
            <div className="flex justify-center items-center py-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-primaryTextColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-center lg:justify-end w-full mt-6 lg:mt-40 ">
          <img
            className="w-full h-full max-w-lg md:max-w-xl aspect-auto lg:max-w-3xl"
            src="https://i.imagescrap.org/2022/11/08/hero.png"
            alt="Catalogue-pana.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
