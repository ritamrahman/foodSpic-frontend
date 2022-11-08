import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-primary py-10">
      {/* <!-- Login component --> */}
      <div className="flex shadow-md bg-secondary">
        {/* <!-- Login form --> */}
        <div className="w-[24rem] h-[32rem] flex flex-wrap content-center justify-center rounded-l-md bg-white">
          <div className="w-72">
            {/* <!-- Heading --> */}
            <h1 className="text-xl font-semibold">Welcome back</h1>
            <small className="text-gray-400">Welcome back! Please enter your details</small>

            {/* <!-- Form --> */}
            <form className="mt-4">
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Avatar URL</label>
                <input
                  type="text"
                  placeholder="Avatar"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Password</label>
                <input
                  type="password"
                  placeholder="*****"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <button className="mb-1.5 block w-full text-center text-primary bg-primaryTextColor hover:bg-primary px-2 py-1.5 rounded-md">
                  Sign Up
                </button>
                <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
                  <img
                    className="w-5 mr-2"
                    src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                    alt=""
                  />
                  Sign in with Google
                </button>
              </div>
            </form>

            {/* <!-- Footer --> */}
            <div className="text-center">
              <span className="text-xs text-gray-400 font-semibold">Allready have an account?</span>
              <Link to="/login" className="text-xs font-semibold text-purple-700">
                Login
              </Link>
            </div>
          </div>
        </div>

        {/* <!-- Login banner --> */}
        <div className="w-[24rem] h-[32rem] flex flex-wrap content-center justify-center rounded-r-md">
          <img
            className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
            src="https://i.imagescrap.org/2022/11/08/photo-1.jpg"
            alt=""
          />
        </div>
      </div>
      ;
    </div>
  );
};

export default SignUp;
