import React, { Component } from 'react'

function Details() {
    return (
      <>
          <div className="flow-root mt-6">
                                <ul className="-my-5 divide-y divide-gray-200">
                                    <li className="flex items-center justify-between py-5">
                                        <p className="text-sm font-medium text-gray-600">Full Name:</p>
                                        <p className="text-sm font-bold text-gray-900">Daniel Joldes</p>
                                    </li>

                                    <li className="flex items-center justify-between py-5">
                                        <p className="text-sm font-medium text-gray-600">Age</p>
                                        <p className="text-sm font-bold text-gray-900">21</p>
                                    </li>

                                    <li className="flex items-center justify-between py-5">
                                        <p className="text-sm font-medium text-gray-600">Ocupation:</p>
                                        <p className="text-sm font-bold text-gray-900">Programmer</p>
                                    </li>

                                    <li className="flex items-center justify-between py-5">
                                        <p className="text-sm font-medium text-gray-600">Phone:</p>
                                        <p className="text-sm font-bold text-gray-900">+40757816840</p>
                                    </li>

                                    <li className="flex items-center justify-between py-5">
                                        <p className="text-sm font-medium text-gray-600">Email:</p>
                                        <p className="text-sm font-bold text-gray-900">danieljoldes0@gmail.com</p>
                                    </li>

                                </ul>
                            </div>
      </>
    )
}

export default Details