import React from "react";
import { useLoaderData } from "react-router-dom";
import { api } from "../../api/api";

const AddKitchen = () => {
  // const { img, kitcheNname, chefsName, minPrice, maxPrice, dessription } = useLoaderData();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const img = form.img.value;
    const kitcheNname = form.kitcheNname.value;
    const chefsName = form.chefsName.value;
    const minPrice = form.minPrice.value;
    const maxPrice = form.maxPrice.value;
    const dessription = form.dessription.value;

    console.log(img, chefsName, kitcheNname, minPrice, maxPrice, dessription);
    const order = {
      img: img,
      kitcheNname: kitcheNname,
      chefsName: chefsName,
      minPrice: minPrice,
      maxPrice: maxPrice,
      dessription: dessription,
    };
    console.log(order);

    fetch(`${api}/addkitchen`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Order placed successfully");
          // form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 my-32">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Add Your Kitchen Here</h2>

        <form onSubmit={handleSubmit}>
          {/* row 1 */}
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            {/* Kitchen Name */}
            <div>
              <label className="text-gray-700 dark:text-gray-200">Kitchen Name</label>
              <input
                name="kitcheNname"
                id="kitchenName"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            {/* chefs Name */}
            <div>
              <label className="text-gray-700 dark:text-gray-200">Chef's Name</label>
              <input
                name="chefsName"
                id="chefsName"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
          {/* row 2 */}
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            {/* logo url */}
            <div>
              <label className="text-gray-700 dark:text-gray-200">logo</label>
              <input
                name="img"
                id="logo"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            {/* price  */}
            <div>
              <label className="text-gray-700 dark:text-gray-200">price</label>
              <div className="flex">
                <fieldset className="w-full space-y-1 dark:text-gray-100">
                  <div className="flex">
                    <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-r-md dark:bg-gray-700">
                      € min
                    </span>
                    <input
                      type="text"
                      name="minPrice"
                      id="price"
                      placeholder="99 999,99"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                </fieldset>
                <fieldset className="w-full space-y-1 dark:text-gray-100">
                  <div className="flex">
                    <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-r-md dark:bg-gray-700">
                      € max
                    </span>
                    <input
                      type="text"
                      name="maxPrice"
                      id="price"
                      placeholder="99 999,99"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          {/* row 3 */}

          {/* Description */}
          <div className="grid grid-cols-1 mt-4 ">
            <label className="text-gray-700 dark:text-gray-200">Description</label>
            <textarea
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlTextarea1"
              name="dessription"
              rows="12"
              placeholder="Your Description"
            ></textarea>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddKitchen;
