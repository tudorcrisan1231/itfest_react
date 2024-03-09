import React from "react";
import { axiosAuthInstanceToAPI } from "../Utils/networking.util";
import { useNavigate } from "react-router";

const MyFoodFavourite = ({ data }) => {
  const navigate = useNavigate();
  function health_score(score) {
    if (score == 1 || score == 0) {
      return "a";
    }
    if (score == 2) {
      return "b";
    }
    if (score == 3) {
      return "c";
    }
    if (score == 4) {
      return "e";
    }
    if (score == 5) {
      return "e";
    }
  }

  const handleRemove = async (id) => {
    try {
      const response = await axiosAuthInstanceToAPI.delete("/fav/", {
        data: {
          prodId: id,
        },
      });
      if (response.status === 200) {
        alert("Produs sters cu succes!");
      } else {
        navigate("/feed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 px-12 mt-12 text-center sm:mt-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 sm:gap-6 xl:gap-8 md:px-0">
      <div className="hover:scale-105 duration-300 after:transition after:ease-[ease] after:duration-300 max-w-xs mx-auto overflow-hidden bg-white  rounded-lg shadow-lg ">
        <div className="p-4">
          <div className="mt-4 overflow-hidden rounded-lg aspect-w-1 aspect-h-1">
            <img
              className="object-cover w-auto h-auto"
              src={data.image}
              alt=""
            />
          </div>

          <div className="flex items-center justify-between mt-4 space-x-6">
            <p className="flex text-base font-bold text-gray-900">
              {data.name}
            </p>

            <div className="text-right shrink-0">
              <img
                className="object-cover w-auto h-10"
                src={`https://static.openfoodfacts.org/images/attributes/dist/nutriscore-${health_score(
                  data.health_score
                )}.svg`}
                alt=""
              />
            </div>
          </div>
          <div>
            <button
              onClick={() => handleRemove(data.id)}
              type="button"
              className="inline-flex items-center justify-center w-full px-4 py-3 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-red-600 rounded-lg hover:bg-orange-600"
            >
              Remove from favourites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFoodFavourite;
