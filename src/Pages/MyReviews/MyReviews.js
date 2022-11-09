import React from "react";

const MyReviews = () => {
  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          <thead className="dark:bg-gray-700">
            <tr className="text-left text-secondary">
              <th className="p-3">Kitchen Name</th>
              <th className="p-3">Review</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
              <td className="p-3">
                <p>97412378923</p>
              </td>
              <td className="p-3">
                <p>Microsoft Corporation</p>
              </td>
              <td className="p-3">
                <p>14 Jan 2022</p>
                <p className="dark:text-gray-400">Friday</p>
              </td>
              <td className="p-3 text-right">
                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                  <span>Pending</span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;