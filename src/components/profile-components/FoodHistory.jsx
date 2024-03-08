import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import FoodPage from '../FoodPage'

function Food() {

    const [foodProducts, setFoodProducts] = useState([
        {
            name: 'Apple',
            description: 'An apple is an edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today.',
            image: 'https://images.unsplash.com/photo-1606781188170-3e3b3e1b3e3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            score: 99,
            calories: 52,
        },
        {
            name: 'Banana',
            description: 'A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas.',
            image: 'https://images.unsplash.com/photo-1611470629533-3e3b3e1b3e3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            score: 93,
            calories: 89,
        }
    ])

    return (
        <>
            <section class="py-12 bg-white sm:py-16 lg:py-20">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="text-center">
                        <h2 class="text-2xl font-bold text-green-800 sm:text-3xl">Your food products</h2>
                    </div>

                    <div class="grid grid-cols-1 gap-5 mt-8 sm:mt-12 sm:grid-cols-2 xl:grid-cols-3 sm:gap-8 xl:gap-12">
                        {foodProducts.map((product, index) => (
                            <div  class="relative overflow-hidden transition-all duration-200 bg-gray-100 rounded-xl hover:bg-gray-200">
                                <div class="p-6 lg:px-10 lg:py-8">
                                    <div class="flex items-center justify-start space-x-8">
                                        <img src={product.image} alt={product.name} className="flex-shrink-0 w-10 h-10 text-gray-600 md:w-12 md:h-12"/>
    
                                        <div>
                                            <h3 class="text-sm font-bold text-gray-900 sm:text-base lg:text-lg">
                                                <a href="#" title="">
                                                    {product.name}
                                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                                </a>
                                            </h3>

                                            <p class="mt-2 text-sm font-medium text-gray-500 text-nowrap">{product.calories} Calories</p>
                                            <p class="mt-2 text-sm font-medium text-gray-500 text-nowrap">Score:  {product.score}/100</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Food