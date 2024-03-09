import React, { Component, useState, useEffect } from "react";
import { axiosAuthInstanceToAPI } from "../Utils/networking.util";

import MyFoodFavourite from "./MyFoodFavourite";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getFavProduct = async () => {
      try {
        const response = await axiosAuthInstanceToAPI.get("/fav/");
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFavProduct();
  }, []);

  return (
    <>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-3xl font-bold text-black-700">
              Your Food Products
            </h2>
            <p className="mt-4 text-base font-medium text-gray-500">
              Here are your food products. Make sure to eat as healthier as
              possible. Have a wonderful day!
            </p>
          </div>

          <div>
            {data &&
              data.map((product, index) => {
                return (
                  <a href={"/food/" + product.name + "/"}>
                    <MyFoodFavourite data={product} />
                  </a>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
