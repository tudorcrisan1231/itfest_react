import React, { Component } from 'react'
import { axiosAuthInstanceToAPI } from "../Utils/networking.util";
import { useEffect, useState } from 'react';

function FeatureProduct() {
    function getProducts() {
        axiosAuthInstanceToAPI.get('/products/').then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }
    //on page load
    useEffect(() => {
        getProducts()
    }, [])
    return (
      <>
          <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:space-x-6">
                    <h2 className="flex-1 text-2xl font-bold text-gray-900"> Featured products</h2>

                    <div className="mt-6 sm:mt-auto">
                        <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center px-5 py-3 text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 bg-transparent border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                            role="button"
                        >
                            All foods
                        </a>
                    </div>
                </div>

                <hr className="mt-6 border-gray-200" />

                <div className="grid grid-cols-1 px-6 mt-12 sm:mt-16 gap-x-6 gap-y-8 sm:px-0 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4 group">
                        <a href="#" title="" className="block overflow-hidden rounded-lg aspect-w-1 aspect-h-1">
                            <img className="object-cover w-full h-72 transition-all duration-200 transform group-hover:scale-110" src="https://images.openfoodfacts.org/images/products/544/900/000/0996/front_en.736.200.jpg" alt="" />
                        </a>

                        <div className="flex items-center justify-between space-x-6">
                            <p className="flex-1 text-base font-bold text-gray-900">
                                <a href="#" title=""> Coca Cola </a>
                            </p>
                            <p className="text-sm font-medium text-gray-500">
                                <img className='h-10' src="https://static.openfoodfacts.org/images/attributes/dist/nutriscore-a.svg" alt="" />
                            </p>
                        </div>

                        <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center w-full px-5 py-3 text-xs font-bold tracking-widest text-gray-500 uppercase transition-all duration-200 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-gray-100 hover:text-gray-900"
                            role="button"
                        >
                            View more
                        </a>
                    </div>

                    <div className="space-y-4 group">
                        <a href="#" title="" className="block overflow-hidden rounded-lg aspect-w-1 aspect-h-1">
                            <img className="object-cover w-full h-72 transition-all duration-200 transform group-hover:scale-110" src="https://images.openfoodfacts.org/images/products/505/187/300/5277/front_en.3.400.jpg" alt="" />
                        </a>

                        <div className="flex items-center justify-between space-x-6">
                            <p className="flex-1 text-base font-bold text-gray-900">
                                <a href="#" title=""> Pizza express margherita - 393g </a>
                            </p>
                            <p className="text-sm font-medium text-gray-500">
                                <img className='h-10' src="https://static.openfoodfacts.org/images/attributes/dist/nutriscore-b.svg" alt="" />
                            </p>
                        </div>

                        <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center w-full px-5 py-3 text-xs font-bold tracking-widest text-gray-500 uppercase transition-all duration-200 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-gray-100 hover:text-gray-900"
                            role="button"
                        >
                            View more
                        </a>
                    </div>

                    <div className="space-y-4 group">
                        <a href="#" title="" className="block overflow-hidden rounded-lg aspect-w-1 aspect-h-1">
                            <img className="object-cover w-full h-72 transition-all duration-200 transform group-hover:scale-110" src="https://images.openfoodfacts.org/images/products/482/306/572/9671/front_uk.3.200.jpg" alt="" />
                        </a>

                        <div className="flex items-center justify-between space-x-6">
                            <p className="flex-1 text-base font-bold text-gray-900">
                                <a href="#" title=""> President </a>
                            </p>
                            <p className="text-sm font-medium text-gray-500">
                                <img className='h-10' src="https://static.openfoodfacts.org/images/attributes/dist/nutriscore-c.svg" alt="" />
                            </p>
                        </div>

                        <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center w-full px-5 py-3 text-xs font-bold tracking-widest text-gray-500 uppercase transition-all duration-200 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-gray-100 hover:text-gray-900"
                            role="button"
                        >
                            View more
                        </a>
                    </div>

                    <div className="space-y-4 group">
                        <a href="#" title="" className="block overflow-hidden rounded-lg aspect-w-1 aspect-h-1">
                            <img className="object-cover w-full h-72 transition-all duration-200 transform group-hover:scale-110" src="https://images.openfoodfacts.org/images/products/327/408/000/5003/front_en.797.200.jpg" alt="" />
                        </a>

                        <div className="flex items-center justify-between space-x-6">
                            <p className="flex-1 text-base font-bold text-gray-900">
                                <a href="#" title=""> Eau de Source - Cristaline - 1,5 L </a>
                            </p>
                            <p className="text-sm font-medium text-gray-500">
                                <img className='h-10' src="https://static.openfoodfacts.org/images/attributes/dist/nutriscore-d.svg" alt="" />
                            </p>
                        </div>

                        <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center w-full px-5 py-3 text-xs font-bold tracking-widest text-gray-500 uppercase transition-all duration-200 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-gray-100 hover:text-gray-900"
                            role="button"
                        >
                            View more
                        </a>
                    </div>

                    <div className="space-y-4 group">
                        <a href="#" title="" className="block overflow-hidden rounded-lg aspect-w-1 aspect-h-1">
                            <img className="object-cover w-full h-72 transition-all duration-200 transform group-hover:scale-110" src="https://images.openfoodfacts.org/images/products/301/762/042/5035/front_en.488.200.jpg" alt="" />
                        </a>

                        <div className="flex items-center justify-between space-x-6">
                            <p className="flex-1 text-base font-bold text-gray-900">
                                <a href="#" title=""> Nutella </a>
                            </p>
                            <p className="text-sm font-medium text-gray-500">
                                <img className='h-10' src="https://static.openfoodfacts.org/images/attributes/dist/nutriscore-e.svg" alt="" />
                            </p>
                        </div>

                        <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center w-full px-5 py-3 text-xs font-bold tracking-widest text-gray-500 uppercase transition-all duration-200 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-gray-100 hover:text-gray-900"
                            role="button"
                        >
                            View more
                        </a>
                    </div>
                </div>
            </div>
        </section>
      </>
    )
}

export default FeatureProduct