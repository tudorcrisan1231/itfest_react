import React, { Component } from 'react'

function AddFood() {
    return (
        <>
            <div class="h-auto bg-gray-100">
                <div class="flex items-center justify-center w-full h-full px-4 py-5 sm:p-6">
                    <div class="w-full max-w-xl bg-white shadow-lg rounded-xl">
                        <div class="px-4 py-5 sm:p-6">
                            <p class="text-xl font-bold text-green-700">Add Food</p>
                            <p class="mt-3 text-sm font-medium text-gray-500">Enter your food details for adding in application and to see the food's score.</p>

                            <form action="#" method="POST" class="my-6">
                                <div class="space-y-4"> 
                                        <div class="flex items-center justify-center gap-3 mt-2">         
                                            <input type="text" name="" id="" placeholder="Name" value="" class="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                        </div>                    

                                        <div class="flex items-center justify-center gap-3 mt-2">
                                            <input type="text" name="" id="" placeholder="Description" value="" class="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                        </div>

                                        <div class="flex items-center justify-center gap-3 mt-2">
                                            <input type="text" name="" id="" placeholder="Calories" value="" class="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                        </div>
                                        
                                        <div class="flex items-center justify-center gap-3 mt-2">
                                            <input type="text" name="" id="" placeholder="Proteins" value="" class="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                        </div>

                                        <div class="flex items-center justify-center gap-3 mt-2">
                                            <input type="text" name="" id="" placeholder="Carbohydrates" value="" class="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                        </div>

                                        <div class="flex items-center justify-center gap-3 mt-2">
                                            <input type="text" name="" id="" placeholder="Fat" value="" class="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                        </div>
                                        
                                        <div class="flex items-center justify-center gap-3 mt-2">
                                            <input type="text" name="" id="" placeholder="Sugar" value="" class="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                        </div>

                                        <div class="flex items-center justify-center gap-3 mt-2">
                                            <input type="text" name="" id="" placeholder="Fiber" value="" class="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                        </div>

                                        <div class="flex items-center justify-center gap-3 mt-2">
                                            <input type="text" name="" id="" placeholder="Cholesterol" value="" class="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                        </div>

                                        <div class="flex items-center justify-center gap-3 mt-2">
                                            <input type="text" name="" id="" placeholder="Sodium" value="" class="block h-10 w-full px-4 py-3 placeholder-gray-400 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                        </div>

                                    <div>
                                        <label for="" class="text-sm font-bold text-gray-900"> </label>
                                        <div class="mt-2">
                                            <select class="block w-full py-3 pl-4 pr-10 border text-gray-800 border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                                                <option className='hidden'>Category</option>
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

                                <div class="flex items-center justify-end mt-5 space-x-4">
                                    <button
                                        type="reset"
                                        class="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        class="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
                                    >
                                        Add
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddFood