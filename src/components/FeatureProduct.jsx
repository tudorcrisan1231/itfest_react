import React, { Component } from 'react'
import { axiosAuthInstanceToAPI } from "../Utils/networking.util";
import { useEffect, useState } from 'react';

function FeatureProduct() {
    const [products, setProducts] = useState([])
    function getProducts() {
        axiosAuthInstanceToAPI.get('/product/').then((response) => {
            console.log(response.data.products)
            setProducts(response.data.products)
        }).catch((error) => {
            console.log(error)
        })
    }

    function health_score(score) {
        if(score == 1) {
            return "a"
        }
        if(score == 2) {
            return "b"
        }
        if(score == 3) {
            return "cC"
        }
        if(score == 4) {
            return "e"
        }
        if(score == 5) {
            return "e"
        }
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
                    {products.map((product) => {
                        return (
                            <div className="space-y-4 group">
                                <a href={`/food/${product.name}`} title="" className="block overflow-hidden rounded-lg aspect-w-1 aspect-h-1">
                                    <img className="object-cover w-full h-72 transition-all duration-200 transform group-hover:scale-110" src={product.image} alt="" />
                                </a>

                                <div className="flex items-center justify-between space-x-6">
                                    <p className="flex-1 text-base font-bold text-gray-900">
                                        <a href={`/food/${product.name}`} title=""> 
                                            {product.name}
                                        </a>
                                    </p>
                                    <p className="text-sm font-medium text-gray-500">
                                        <img className='h-10' src={`https://static.openfoodfacts.org/images/attributes/dist/nutriscore-${health_score(product.health_score)}.svg`} alt="" />
                                    </p>
                                </div>

                                <a
                                    href={`/food/${product.name}`}
                                    title=""
                                    className="inline-flex items-center justify-center w-full px-5 py-3 text-xs font-bold tracking-widest text-gray-500 uppercase transition-all duration-200 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-gray-100 hover:text-gray-900"
                                    role="button"
                                >
                                    View more
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
      </>
    )
}

export default FeatureProduct