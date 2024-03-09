import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import logo.png from assets
import logo from '../assets/logo.png'

function Nav() {
    return (
      <>
        <header class="relative">
            <div class="bg-white border-b border-gray-200">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="flex justify-between h-16 lg:h-[72px]">
                        <div class="flex items-center flex-shrink-0 -m-1">
                            <a href="/" title="" class="flex">
                                <img class="w-auto h-16" src={logo} alt="" />
                            </a>
                        </div>

                        <div class="hidden lg:flex lg:justify-start lg:ml-16 lg:space-x-8 xl:space-x-14">
                            <a href="/add-food" title="" class="inline-flex items-center font-sans text-sm font-medium text-gray-900 transition-all duration-200 border-b-2 border-transparent xl:text-base hover:border-gray-900 focus:outline-none focus:border-gray-900"> 
                                Contribute
                             </a>
                        </div>

                        <div class="flex items-center justify-end ml-auto space-x-6">
                            <button type="button" class="p-2 -m-2 text-gray-900 transition-all duration-200 lg:hidden hover:text-gray-700">
                                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>

                            <button type="button" class="relative inline-flex items-center justify-center text-white transition-all duration-200 bg-gray-900 rounded-full w-9 h-9 md:w-12 md:h-12 hover:bg-gray-700">
                                <svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                <span class="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-indigo-600 rounded-full -top-1 -left-1"> 3 </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
      </>
    )
}

export default Nav