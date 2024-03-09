import React, { Component } from "react";
import { axiosAuthInstanceToAPI } from "../Utils/networking.util";
import { useParams } from "react-router-dom";

function FoodPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axiosAuthInstanceToAPI.get(`/product/${name}`);
      setLoading(false);
      if (response.status === 200) {
        setData(response.data);
        console.log(data);
      } else {
        console.log("Eroare la fetch!");
      }
    };
    fetchData();
  }, []);

  //   if(loading === true) return <Loader />

  return (
    <>
      <section class="py-12 bg-white sm:py-16 lg:py-20">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="grid items-center justify-center max-w-4xl grid-cols-1 mx-auto lg:grid-cols-2 gap-x-16 gap-y-12">
            <div>
              <div class="max-w-lg mx-auto text-center lg:text-left lg:max-w-none lg:mx-0">
                <h2 class="text-sm font-bold tracking-wide uppercase text-green-500">
                  Food details
                </h2>
                <p class="mt-4 text-5xl font-bold text-gray-900 md:text-6xl">
                  Banana
                </p>
                <p class="mt-6 text-md sm:text-lg font-medium text-gray-600 rounded-lg shadow-lg p-3 ">
                  A banana is an elongated, edible fruit botanically a berry
                  produced by several kinds of large herbaceous flowering plants
                  in the genus Musa. In some countries, bananas used for cooking
                  may be called "plantains", distinguishing them from dessert
                  bananas.
                </p>
              </div>

              <div class="flex items-center justify-center max-w-xs mx-auto mt-12 lg:mt-28 lg:max-w-none lg:mx-0 gap-x-16">
                <div>
                  <p class="text-base font-medium text-gray-500">Calories</p>
                  <p class="mt-2 text-3xl font-bold text-gray-900">89</p>
                </div>

                <div>
                  <p class="text-base font-medium text-gray-500">Score</p>
                  <p class="mt-2 text-3xl font-bold text-gray-900">95/100</p>
                </div>
              </div>
            </div>

            <div>
              <div class="max-w-xs mx-auto overflow-hidden bg-white  rounded-lg shadow-lg ">
                <div class="p-4">
                  <div class="mt-4 overflow-hidden rounded-lg aspect-w-1 aspect-h-1">
                    <img
                      class="object-cover w-full h-full"
                      src="https://loe.org/content/2014-04-18/10-bananabunch.gif"
                      alt=""
                    />
                  </div>

                  <div class="flex items-center justify-between mt-4 space-x-6">
                    <p class="flex text-base font-bold text-gray-900">
                      Banana food
                    </p>

                    <div class="text-right shrink-0">
                      <img
                        class="object-cover w-auto h-10"
                        src="https://static.openfoodfacts.org/images/attributes/dist/nutriscore-a.svg"
                        alt=""
                      />
                    </div>
                  </div>

                  <div class="flex items-center justify-between mt-4 space-x-4">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center w-full px-4 py-3 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-green-500 rounded-lg hover:bg-green-600"
                    >
                      Like
                    </button>

                    <button
                      type="button"
                      class="inline-flex items-center justify-center w-full px-4 py-3 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-red-600 rounded-lg hover:bg-red-700"
                    >
                      Dislike
                    </button>
                  </div>
                  <div class="flex items-center justify-between mt-4 space-x-4">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center w-full px-4 py-3 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-orange-500 rounded-lg hover:bg-orange-600"
                    >
                      Add to favorites
                    </button>
                  </div>
                </div>
              </div>
              <div class="mt-10 max-w-xs mx-auto overflow-hidden bg-white  rounded-lg shadow-lg">
                <p class="m-5 mb-0 flex text-base font-bold text-gray-900">
                  Nutrients:
                </p>
                <div class="p-5">
                  <table class="w-full text-gray-700">
                    <tr className="border-b border-gray-300">
                      <td>Proteins</td>
                      <td>0.3g</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td>Fat</td>
                      <td>0.3g</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td>Carbohydrates</td>
                      <td>22.8g</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td>Sugar</td>
                      <td>12.2g</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td>Fiber</td>
                      <td>2.6g</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td>Calories</td>
                      <td>89</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td>Cholesterol</td>
                      <td>0mg</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td>Sodium</td>
                      <td>1mg</td>
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
