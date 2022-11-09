import React from "react";

const ReviewForm = () => {
  return (
    <div className="flex flex-col p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-3xl font-semibold text-center my-7">Your opinion matters!</h2>

        <div className="flex flex-col w-full">
          <textarea
            rows="3"
            placeholder="Message..."
            className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"
          ></textarea>
          <button
            type="button"
            className="max-w-lg mx-auto py-4 px-6 my-8 font-semibold rounded-md bg-secondaryBG text-primary"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <span className="text-sm dark:text-gray-400">Maybe later</span>
      </div>
    </div>
  );
};

export default ReviewForm;
