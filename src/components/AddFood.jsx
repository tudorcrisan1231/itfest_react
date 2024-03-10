import React, { Component, useEffect } from "react";
import { axiosAuthInstanceToAPI } from "../Utils/networking.util";
import { useState } from "react";
import axios from "axios";
import { useDebounce } from "use-debounce";
import { Autocomplete, selectClasses } from "@mui/material";
import { TextField } from "@mui/material";
import AsyncSelect from "react-select/async";

function AddFood() {
  const [dataProds, setDataProds] = useState(null);
  const [dataOptions, setDataOptions] = useState([]);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [energy_100g, setEnergy_100g] = useState("0");
  const [proteins_100g, setProteins_100g] = useState("0");
  const [carbohydrates_100g, setCarbohydrates_100g] = useState("0");
  const [sugars_100g, setSugars_100g] = useState("0");
  const [fat_100g, setFat_100g] = useState("0");
  const [saturated_fat_100g, setSaturated_fat_100g] = useState("0");
  const [fiber_100g, setFiber_100g] = useState("0");
  const [salt_100g, setSalt_100g] = useState("0");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  // const [name, setName] = useState("");
  // const [debouncedValue] = useDebounce(name, 1000);
  const [inputValue, setInputValue] = useState("");

  const populateNutriments = (selectedProduct) => {
    setEnergy_100g(selectedProduct.energy_100g);
    setProteins_100g(selectedProduct.proteins_100g);
    setCarbohydrates_100g(selectedProduct.carbohydrates_100g);
    setSugars_100g(selectedProduct.sugars_100g);
    setFat_100g(selectedProduct.fat_100g);
    setSalt_100g(selectedProduct.salt_100g);
    setSaturated_fat_100g(selectedProduct.saturated_fat_100g);
    setFiber_100g(selectedProduct.fiber_100g);
    setImage(selectedProduct.image);
  };

  const handleChange = (selectedOption) => {
    console.log("Option selected:", selectedOption);
    const selectedProduct = dataProds.filter(
      (item) => item.id === selectedOption.value
    )[0];
    populateNutriments(selectedProduct);
    // Aici poți seta starea bazată pe opțiunea selectată sau face alte acțiuni
  };

  const handleInputChange = (event) => {
    console.log("finish tiping");
    const value = event.target.value;
    setName(value);
  };
  const loadOptions = async (inputValue) => {
    try {
      const response = await axios.get(
        `https://world.openfoodfacts.net/cgi/search.pl?search_terms=${inputValue}&search_simple=1&action=process&json=1&page_size=5`
      );
      setDataProds(
        response.data.products.map((item) => {
          return {
            id: item.id,
            label: item.product_name,
            energy_100g: item.nutriments.energy_100g,
            proteins_100g: item.nutriments.proteins_100g,
            carbohydrates_100g: item.nutriments.carbohydrates_100g,
            image: item.image_front_small_url,
            sugars_100g: item.nutriments.sugars_100g,
            fat_100g: item.nutriments.fat_100g,
            saturated_fat_100g: item.nutriments["saturated-fat_100g"],
            fiber_100g: item.nutriments.fiber_100g,
            salt_100g: item.nutriments.salt_100g,
          };
        })
      );

      return response.data.products.map((product) => ({
        label: product.product_name,
        value: product.id,
      }));
    } catch (error) {
      console.error("Error loading options:", error);
      return [];
    }
  };

  // useEffect(() => {
  //   const fechDataProd = async (name) => {
  //     try {
  //       const response = await axios.get(
  //         `https://world.openfoodfacts.net/cgi/search.pl?search_terms=${name}&search_simple=1&action=process&json=1&page_size=5`
  //       );
  //       if (response.status === 200) {
  //         setDataProds(
  //           response.data.products.map((item) => {
  //             return {
  //               label: item.product_name,
  //               energy_100g: item.nutriments.energy_100g,
  //               proteins_100g: item.nutriments.proteins_100g,
  //               carbohydrates_100g: item.nutriments.carbohydrates_100g,
  //               sugars_100g: item.nutriments.sugars_100g,
  //               fat_100g: item.nutriments.fat_100g,
  //               saturated_fat_100g: item.nutriments["saturated-fat_100g"],
  //               fiber_100g: item.nutriments.fiber_100g,
  //               salt_100g: item.nutriments.salt_100g,
  //             };
  //           })
  //         );
  //         const options = response.data.products.map((product) => ({
  //           label: product.product_name,
  //           value: product.id,
  //         }));
  //         setFoodOptions(options);
  //         console.log(dataProds);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fechDataProd(name);
  // }, []);

  async function handleSubmit() {
    try {
      // if (
      //   inputValue === "" ||
      //   description === "" ||
      //   image === "" ||
      //   energy_100g === "" ||
      //   proteins_100g === "" ||
      //   carbohydrates_100g === "" ||
      //   sugars_100g === "" ||
      //   fat_100g === "" ||
      //   saturated_fat_100g === "" ||
      //   fiber_100g === "" ||
      //   salt_100g === "" ||
      //   category === ""
      // ) {
      // alert("Please fill all the fields");
      // return;
      // } else {
      setLoading(true);
      console.log(inputValue);
      const response = await axiosAuthInstanceToAPI.post("/product/", {
        name: inputValue,
        description: description,
        image: image,
        energy_100g: energy_100g,
        proteins_100g: proteins_100g,
        carbohydrates_100g: carbohydrates_100g,
        sugars_100g: sugars_100g,
        fat_100g: fat_100g,
        saturated_fat_100g: saturated_fat_100g,
        fiber_100g: fiber_100g,
        salt_100g: salt_100g,
        category: category,
      });
      setLoading(false);
      if (response.status === 201) {
        //return to home page
        window.location.href = "/";
      } else {
        alert("error");
      }
    } catch (err) {
      // }
      console.error(err);
      alert("error");
    }
  }
  const customStyles = {
    container: (provided) => ({
      ...provided,
      width: "100%", // Setează lățimea containerului la 100%
    }),
    control: (provided) => ({
      ...provided,
      width: "100%", // Asigură că controlul (partea vizibilă a selectului) va avea și el 100% lățime
    }),
  };
  if (loading === true)
    return (
      <div>
        <h1>LOADING</h1>
      </div>
    );
  else
    return (
      <>
        <div className="h-auto bg-gray-100">
          <div className="flex items-center justify-center w-full h-full px-4 py-5 sm:p-6">
            <div className="w-full max-w-xl bg-white shadow-lg rounded-xl">
              <div className="px-4 py-5 sm:p-6">
                <p className="text-xl font-bold text-green-700">Add Food</p>
                <p className="mt-3 text-sm font-medium text-gray-500">
                  Enter your food details for adding in application and to see
                  the food's score.
                </p>

                <div className="my-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3 mt-2">
                      <AsyncSelect
                        cacheOptions
                        loadOptions={loadOptions}
                        defaultOptions
                        styles={customStyles}
                        value={inputValue}
                        onInputChange={setInputValue}
                        onChange={handleChange}
                        placeholder="Search for food..."
                      />
                      {/* <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Name"
                        onChange={handleInputChange}
                        value={name}
                        className="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                      /> */}
                    </div>
                    {/* {dataProds && (
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={dataProds}
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                          <TextField {...params} label="Autocomplete" />
                        )}
                      />
                    )} */}

                    <div className="flex items-center justify-center gap-3 mt-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        className="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                      />
                    </div>

                    <div className="flex items-center justify-center gap-3 mt-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        onChange={(e) => setImage(e.target.value)}
                        placeholder="Image URL"
                        value={image}
                        className="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                      />
                    </div>

                    <div className="flex items-center justify-center gap-3 mt-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Kcal"
                        onChange={(e) => setEnergy_100g(e.target.value)}
                        value={energy_100g}
                        className="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                      />
                    </div>

                    <div className="flex items-center justify-center gap-3 mt-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Proteins"
                        onChange={(e) => setProteins_100g(e.target.value)}
                        value={proteins_100g}
                        className="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                      />
                    </div>

                    <div className="flex items-center justify-center gap-3 mt-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Carbohydrates"
                        onChange={(e) => setCarbohydrates_100g(e.target.value)}
                        value={carbohydrates_100g}
                        className="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                      />
                    </div>

                    <div className="flex items-center justify-center gap-3 mt-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Fat"
                        onChange={(e) => setFat_100g(e.target.value)}
                        value={fat_100g}
                        className="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                      />
                    </div>

                    <div className="flex items-center justify-center gap-3 mt-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Sugar"
                        onChange={(e) => setSugars_100g(e.target.value)}
                        value={sugars_100g}
                        className="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                      />
                    </div>

                    <div className="flex items-center justify-center gap-3 mt-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Fiber"
                        onChange={(e) => setFiber_100g(e.target.value)}
                        value={fiber_100g}
                        className="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                      />
                    </div>

                    <div className="flex items-center justify-center gap-3 mt-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Sat. Fat"
                        onChange={(e) => setSaturated_fat_100g(e.target.value)}
                        value={saturated_fat_100g}
                        className="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                      />
                    </div>

                    <div className="flex items-center justify-center gap-3 mt-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Salt"
                        onChange={(e) => setSalt_100g(e.target.value)}
                        value={salt_100g}
                        className="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-bold text-gray-900">
                        {" "}
                      </label>
                      <div className="mt-2">
                        <select
                          className="block w-full py-3 pl-4 pr-10 border text-gray-800 border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                          onChange={(e) => setCategory(e.target.value)}
                          value={category}
                        >
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
                      onClick={() => handleSubmit()}
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
