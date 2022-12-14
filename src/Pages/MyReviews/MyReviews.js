import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { api } from "../../api/api";
import NotFound from "../../Components/ErrorMsg/NotFound";
import MetaData from "../../Components/Layout/MetaData";
import { AuthContext } from "../../contexts/AuthProvider";

const MyReviews = () => {
  const { user, loading } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState();
  // const [kitchenId, review, dateWhenCreated] = reviews;
  // call review api
  useEffect(() => {
    setIsLoading(true);

    fetch(`${api}/myreviews/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setIsLoading(false);
      })
      .catch((er) => console.error(er));
  }, [reviews, user.email]);

  // handelDelete
  const handelDelete = (id) => {
    console.log("first", id);
    setIsLoading(true);
    fetch(`${api}/review/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Deleted successfully");
          setIsLoading(false);
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <>
      <MetaData title="My Reviews" />
      {reviews?.length === 0 ? (
        <NotFound />
      ) : (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
          <h2 className="mb-4 text-2xl font-semibold leading-tight">My Reviews</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <colgroup>
                <col />
                <col />
                <col />
                <col className="w-24" />
              </colgroup>
              <thead className="dark:bg-gray-700">
                <tr className="text-left text-secondary bg-secondaryBG">
                  <th className="p-3">Kitchen Name</th>
                  <th className="p-3">Review</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {!loading &&
                  reviews?.map((review) => (
                    <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                      <>
                        <td className="p-3">{review.kitchenName ? review.kitchenName : ""}</td>
                        <td className="p-3">{review.review}</td>
                        <td className="p-3">{review.dateWhenCreated.split(":")[0]}</td>
                        <td className="flex p-3 text-right">
                          <button className="mx-2">Edit</button>
                          <button className="mx-2" onClick={() => handelDelete(review._id)}>
                            Delete
                          </button>
                        </td>
                      </>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default MyReviews;
