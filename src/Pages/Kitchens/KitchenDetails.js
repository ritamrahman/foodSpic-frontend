import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { api } from "../../api/api";
import KitchenDetailsCard from "../../Components/Card/KitchenDetailsCard";
import ReviewCard from "../../Components/Card/ReviewCard";
import MetaData from "../../Components/Layout/MetaData";
import Loading from "../../Components/Loading/Loading";
import ReviewForm from "../../Components/Review/ReviewForm";
import { AuthContext } from "../../contexts/AuthProvider";

const KitchenDetails = () => {
  const { user, loading } = useContext(AuthContext);
  const KitchenDetails = useLoaderData();
  const { id } = useParams();
  const [reviews, setReviews] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // call review api
  useEffect(() => {
    setIsLoading(true);

    fetch(`${api}/kitchenreview/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setIsLoading(false);
      })
      .catch((er) => console.error(er));
  }, [id]);

  // submit review
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = user.displayName;
    const userAvater = user.photoURL;
    const userEmail = user.email;
    const review = form.review.value;
    //  const minPrice = form.minPrice.value;
    //  const maxPrice = form.maxPrice.value;
    //  const dessription = form.dessription.value;

    // console.log(review, userName, userAvater);

    const reviewData = {
      userName,
      userAvater,
      userEmail,
      review,
    };
    //  console.log(kitchenData);

    fetch(`${api}/submitreview/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Thanks For Submit Your Review");
          form.reset();
          window.location.reload();
        }
      })
      .catch((er) => console.error(er));
  };
  console.log(user);
  // console.log(reviews);
  return (
    <div>
      <MetaData title={`${KitchenDetails.kitcheNname}`} />
      {!KitchenDetails ? (
        <Loading />
      ) : (
        <>
          <KitchenDetailsCard KitchenDetails={KitchenDetails} />
          <div className="container mx-auto py-12">
            <h2 className="text-5xl font-Handlee text-center pb-10 text-primaryTextColor">Description</h2>
            <article className="px-2 lg:px-36">{KitchenDetails.dessription}</article>
            {/* review container */}
            <div className=" mt-32 py-20 bg-primary rounded-lg bottom-3 shadow-lg ">
              {!loading && user?.uid ? (
                // ReviewForm start
                <div className="flex flex-col p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
                  <div className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center my-7">Your opinion matters!</h2>

                    <form onSubmit={handleSubmit} className="flex flex-col w-full">
                      <textarea
                        rows="3"
                        name="review"
                        placeholder="Message..."
                        className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"
                      ></textarea>
                      <button
                        type="submit"
                        className="max-w-lg mx-auto py-4 px-6 my-8 font-semibold rounded-md bg-secondaryBG text-primary"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-sm dark:text-gray-400">Maybe later</span>
                  </div>
                </div>
              ) : (
                // ReviewForm end
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
                  {isLoading ? (
                    <Loading />
                  ) : (
                    <>
                      {reviews?.length === 0 ? (
                        <h1 className="text-secondaryBG ">No Review</h1>
                      ) : (
                        reviews?.map((review) => <ReviewCard review={review} />)
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default KitchenDetails;
