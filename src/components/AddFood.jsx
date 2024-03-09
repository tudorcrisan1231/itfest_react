import React, { Component } from "react";
import { axiosAuthInstanceToAPI } from "../Utils/networking.util";

//on submit of the form, we will send a post request to the server to add the food

function handleSubmit() {
    axiosAuthInstanceToAPI
    .post("/product/", {
        name: "Apple",
        description:"ceva",
        image:"https://healthjade.com/wp-content/uploads/2017/10/apple-fruit.jpg",
        energy_100g: 52,
        proteins_100g: 0.3,
        carbohydrates_100g: 14,
        sugars_100g: 10,
        fat_100g: 0.2,
        saturated_fat_100g: 0.02,
        fiber_100g: 2.4,
        salt_100g: 0.001,
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err);
        alert("error");
    });
}


function AddFood() {
  return (
    <>
      <div className="h-auto bg-gray-100">
        <div className="flex items-center justify-center w-full h-full px-4 py-5 sm:p-6">
          <div className="w-full max-w-xl bg-white shadow-lg rounded-xl">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-xl font-bold text-green-700">Add Food</p>
              <p className="mt-3 text-sm font-medium text-gray-500">
                Enter your food details for adding in application and to see the
                food's score.
              </p>

              <div className="my-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3 mt-2">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Name"
                      value=""
                      className="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />
                  </div>

                  <div className="flex items-center justify-center gap-3 mt-2">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Description"
                      value=""
                      className="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />
                  </div>

                  <div className="flex items-center justify-center gap-3 mt-2">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Calories"
                      value=""
                      className="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />
                  </div>

                  <div className="flex items-center justify-center gap-3 mt-2">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Proteins"
                      value=""
                      className="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />
                  </div>

                  <div className="flex items-center justify-center gap-3 mt-2">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Carbohydrates"
                      value=""
                      className="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />
                  </div>

                  <div className="flex items-center justify-center gap-3 mt-2">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Fat"
                      value=""
                      className="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />
                  </div>

                  <div className="flex items-center justify-center gap-3 mt-2">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Sugar"
                      value=""
                      className="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />
                  </div>

                  <div className="flex items-center justify-center gap-3 mt-2">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Fiber"
                      value=""
                      className="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />
                  </div>

                  <div className="flex items-center justify-center gap-3 mt-2">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Cholesterol"
                      value=""
                      className="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />
                  </div>

                  <div className="flex items-center justify-center gap-3 mt-2">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Sodium"
                      value=""
                      className="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-900">
                      {" "}
                    </label>
                    <div className="mt-2">
                      <select className="block w-full py-3 pl-4 pr-10 border text-gray-800 border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                        <option className="hidden">Category</option>
                        <option>Fruits</option>
                        <option>Vegetables</option>
                        <option>Meat</option>
                        <option>Dairy</option>
                        <option>Grains</option>
                        <option>Fast-food</option>
                        <option>Drinks</option>
                        <option>Snacks</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end mt-5 space-x-4">
                  <button
                    type="reset"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    onClick={() => handleSubmit() }
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddFood;
