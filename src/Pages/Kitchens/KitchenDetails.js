import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import KitchenDetailsCard from "../../Components/Card/KitchenDetailsCard";
import ReviewCard from "../../Components/Card/ReviewCard";
import ReviewForm from "../../Components/Review/ReviewForm";
import { AuthContext } from "../../contexts/AuthProvider";

const KitchenDetails = () => {
  const { user, loading } = useContext(AuthContext);
  const KitchenDetails = useLoaderData();

  console.log(KitchenDetails);

  return (
    <div>
      <KitchenDetailsCard KitchenDetails={KitchenDetails} />
      <div className="container mx-auto py-12">
        <h2 className="text-5xl font-Handlee text-center pb-10 text-primaryTextColor">Description</h2>
        <article className="px-2 lg:px-36">{KitchenDetails.dessription}</article>
        {/* review container */}
        <div className=" mt-32 py-20 bg-primary rounded-lg bottom-3 shadow-lg ">
          {!loading && user?.uid ? (
            <ReviewForm />
          ) : (
            <>
              <section className="bg-secondary dark:bg-gray-900">
                <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                  <h2 className="text-3xl font-semibold tracking-tight text-gray-700 sm:text-4xl dark:text-white">
                    Please Login First to Submit Your <br /> Review
                  </h2>

                  <div className="mt-6 sm:-mx-2">
                    <div className="inline-flex w-full sm:w-auto sm:mx-2">
                      <Link
                        to="/login"
                        className="inline-flex items-center justify-center w-full px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                      >
                        Login
                      </Link>
                    </div>

                    <div className="inline-flex w-full mt-4 sm:w-auto sm:mx-2 sm:mt-0">
                      <Link
                        to="/signup"
                        className="inline-flex items-center justify-center w-full px-5 py-2 text-gray-700 transition-colors duration-150 transform bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:text-white sm:w-auto dark:hover:bg-gray-800 dark:ring-gray-700 focus:ring focus:ring-gray-200 focus:ring-opacity-80"
                      >
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          <div className="bg-secondary py-10">
            <div className="border-l-4 border-secondaryBG lg:ml-10 rounded-xl">
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
