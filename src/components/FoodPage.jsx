import React, { Component, useState, useEffect } from "react";
import { axiosAuthInstanceToAPI } from "../Utils/networking.util";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function FoodPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { name } = useParams();
  console.log(name);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axiosAuthInstanceToAPI.get(`/product/${name}`);
      setLoading(false);
      if (response.status === 200) {
        setData(response.data);
        console.log(response.data);
      } else {
        console.log("Eroare la fetch!");
      }
    };
    if (name) fetchData();
  }, []);

  //score
  function health_score(score) {
    if (score == 1 || score == 0) {
      return "a";
    }
    if (score == 2) {
      return "b";
    }
    if (score == 3) {
      return "cC";
    }
    if (score == 4) {
      return "e";
    }
    if (score == 5) {
      return "e";
    }
  }

  const handleAddProduct = async () => {
    try {
      const response = await axiosAuthInstanceToAPI.post("/fav/", {
        prodId: data.id,
      });
      console.log("111111");
      navigate("/my-food");
    } catch (err) {
      console.log(err);
    }
  };

  if (loading === true)
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0">
          <animateTransform
            attributeName="transform"
            calcMode="discrete"
            dur="2.4s"
            repeatCount="indefinite"
            type="rotate"
            values="0 12 12;90 12 12;180 12 12;270 12 12"
          />
          <animate
            attributeName="opacity"
            dur="0.6s"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
            values="1;1;0"
          />
        </circle>
        <circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0">
          <animateTransform
            attributeName="transform"
            begin="0.2s"
            calcMode="discrete"
            dur="2.4s"
            repeatCount="indefinite"
            type="rotate"
            values="30 12 12;120 12 12;210 12 12;300 12 12"
          />
          <animate
            attributeName="opacity"
            begin="0.2s"
            dur="0.6s"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
            values="1;1;0"
          />
        </circle>
        <circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0">
          <animateTransform
            attributeName="transform"
            begin="0.4s"
            calcMode="discrete"
            dur="2.4s"
            repeatCount="indefinite"
            type="rotate"
            values="60 12 12;150 12 12;240 12 12;330 12 12"
          />
          <animate
            attributeName="opacity"
            begin="0.4s"
            dur="0.6s"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
            values="1;1;0"
          />
        </circle>
      </svg>
    );
  if (data === null)
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0">
          <animateTransform
            attributeName="transform"
            calcMode="discrete"
            dur="2.4s"
            repeatCount="indefinite"
            type="rotate"
            values="0 12 12;90 12 12;180 12 12;270 12 12"
          />
          <animate
            attributeName="opacity"
            dur="0.6s"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
            values="1;1;0"
          />
        </circle>
        <circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0">
          <animateTransform
            attributeName="transform"
            begin="0.2s"
            calcMode="discrete"
            dur="2.4s"
            repeatCount="indefinite"
            type="rotate"
            values="30 12 12;120 12 12;210 12 12;300 12 12"
          />
          <animate
            attributeName="opacity"
            begin="0.2s"
            dur="0.6s"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
            values="1;1;0"
          />
        </circle>
        <circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0">
          <animateTransform
            attributeName="transform"
            begin="0.4s"
            calcMode="discrete"
            dur="2.4s"
            repeatCount="indefinite"
            type="rotate"
            values="60 12 12;150 12 12;240 12 12;330 12 12"
          />
          <animate
            attributeName="opacity"
            begin="0.4s"
            dur="0.6s"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
            values="1;1;0"
          />
        </circle>
      </svg>
    );
  else
    return (
      <>
        <section className="py-12 bg-white sm:py-16 lg:py-20">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center justify-center max-w-4xl grid-cols-1 mx-auto lg:grid-cols-2 gap-x-16 gap-y-12">
              <div>
                <div className="max-w-lg mx-auto text-center lg:text-left lg:max-w-none lg:mx-0">
                  <h2 className="text-sm font-bold tracking-wide uppercase text-green-500">
                    Food details
                  </h2>
                  <p className="mt-4 text-5xl font-bold text-gray-900 md:text-6xl">
                    {data.name}
                  </p>
                  <p className="mt-6 text-md sm:text-lg font-medium text-gray-600 rounded-lg shadow-lg p-3 ">
                    {data.description}
                  </p>
                </div>

                <div className="flex items-center justify-center max-w-xs mx-auto mt-12 lg:mt-28 lg:max-w-none lg:mx-0 gap-x-16">
                  <div>
                    <p className="text-base font-medium text-gray-500">
                      Calories
                    </p>
                    <p className="mt-2 text-3xl font-bold text-gray-900">
                      {data.energy_100g}
                    </p>
                  </div>

                  <div>
                    <p className="text-base font-medium text-gray-500">Score</p>
                    <p className="mt-2 text-3xl font-bold text-gray-900">
                      {data.health_score}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="max-w-xs mx-auto overflow-hidden bg-white  rounded-lg shadow-lg ">
                  <div className="p-4">
                    <div className="mt-4 overflow-hidden rounded-lg aspect-w-1 aspect-h-1">
                      <img
                        className="object-cover w-full h-full"
                        src={data.image}
                        alt=""
                      />
                    </div>

                    <div className="flex items-center justify-between mt-4 space-x-6">
                      <p className="flex text-base font-bold text-gray-900">
                        {data.name} food
                      </p>

                      <div className="text-right shrink-0">
                        <p className="text-sm font-medium text-gray-500">
                          <img
                            className="h-10"
                            src={`https://static.openfoodfacts.org/images/attributes/dist/nutriscore-${health_score(
                              data.health_score
                            )}.svg`}
                            alt=""
                          />
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 space-x-4">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center w-full px-4 py-3 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-green-500 rounded-lg hover:bg-green-600"
                      >
                        Like
                      </button>

                      <button
                        type="button"
                        className="inline-flex items-center justify-center w-full px-4 py-3 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-red-600 rounded-lg hover:bg-red-700"
                      >
                        Dislike
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4 space-x-4">
                      <button
                        onClick={handleAddProduct}
                        type="button"
                        className="inline-flex items-center justify-center w-full px-4 py-3 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-orange-500 rounded-lg hover:bg-orange-600"
                      >
                        Add to favourites
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-10 max-w-xs mx-auto overflow-hidden bg-white  rounded-lg shadow-lg">
                  <p className="m-5 mb-0 flex text-base font-bold text-gray-900">
                    Nutrients:
                  </p>
                  <div className="p-5">
                    <table className="w-full text-gray-700">
                      <tr className="border-b border-gray-300">
                        <td>Proteins</td>
                        <td>{data.proteins_100g}</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td>Fat</td>
                        <td>{data.fat_100g}</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td>Carbohydrates</td>
                        <td>{data.carbohydrates_100g}</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td>Sugar</td>
                        <td>{data.sugars_100g}</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td>Fiber</td>
                        <td>{data.fiber_100g}</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td>Calories</td>
                        <td>{data.energy_100g}</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td>Cholesterol</td>
                        <td>{data.saturated_fat_100g}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default FoodPage;
