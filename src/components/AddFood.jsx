import React, { Component } from 'react'

function AddFood() {
    return (
      <>
          <div class="h-[600px] bg-gray-100">
    <div class="flex items-center justify-center w-full h-full px-4 py-5 sm:p-6">
        <div class="w-full max-w-sm bg-white shadow-lg rounded-xl">
            <div class="px-4 py-5 sm:p-6">
                <p class="text-xl font-bold text-gray-900">Add New User</p>
                <p class="mt-3 text-sm font-medium text-gray-500">Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</p>

                <form action="#" method="POST" class="mt-6">
                    <div class="space-y-4">
                        <div>
                            <label for="" class="text-sm font-bold text-gray-900"> Name </label>
                            <div class="mt-2">
                                <input type="text" name="" id="" placeholder="John Doe" value="" class="block w-full px-4 py-3 placeholder-gray-500 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                            </div>
                        </div>

                        <div>
                            <label for="" class="text-sm font-bold text-gray-900"> Email </label>
                            <div class="mt-2">
                                <input type="text" name="" id="" placeholder="email@example.com" value="" class="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                            </div>
                        </div>

                        <div>
                            <label for="" class="text-sm font-bold text-gray-900"> User Role </label>
                            <div class="mt-2">
                                <select class="block w-full py-3 pl-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                                    <option>Editor</option>
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