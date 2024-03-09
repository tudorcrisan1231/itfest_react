import React, { useState } from 'react'
import Details from './profile-components/Details'
import Allergens from './profile-components/Allergens'
import FoodHistory from './profile-components/FoodHistory'
function Profile() {

    const [profilePage, setProfilePage] = useState('details')

    return (
        <>
            <section>
                <div className="py-12 bg-gray-900 sm:pb-6 sm:pt-16 lg:pt-20">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-stretch justify-between sm:items-center">
                                <img className="object-cover w-32 h-auto sm:-mb-14 shrink-0 rounded-xl" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/mint-success/3/image.png" alt="" />

                                <div className="flex flex-col justify-between flex-1 ml-8 sm:flex-row sm:items-center sm:space-x-6">
                                    <div className="sm:flex-1">
                                        <p className="text-xl font-bold text-white">Daniel Joldes</p>
                                        <p className="mt-1 text-base font-medium text-gray-400">Descriere</p>
                                    </div>

                                    <div className="mt-auto sm:ml-auto sm:mt-0">
                                        <a
                                            href="#"
                                            title=""
                                            className="inline-flex items-center justify-center w-full px-5 py-3 text-xs font-bold tracking-widest text-gray-900 uppercase transition-all border border-transparent rounded-lg hover:scale-105 ease-in duration-200 bg-green-400 hover:bg-green-500"
                                            role="button"
                                        >
                                            Add food
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-12 bg-white sm:py-16 lg:py-20">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="max-w-4xl mx-auto">
                            <div className="border-b border-gray-200">
                                <nav className="flex -mb-px space-x-8" aria-label="Tabs">
                                    <button onClick={() => setProfilePage('details') } className={` ${profilePage === 'details' ? 'border-gray-900' : 'border-transparent'} px-0 py-4 text-xs font-bold tracking-wide text-gray-400  hover:text-gray-700 hover:border-gray-300 uppercase border-b-2 sm:px-5 whitespace-nowrap`}> Details</button>
                                    <button onClick={() => setProfilePage('allergens') } className={` ${profilePage === 'allergens' ? 'border-gray-900' : 'border-transparent'} px-0 py-4 text-xs font-bold tracking-wide text-gray-400 uppercase border-b-2 sm:px-5 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap`}> Allergens </button>
                                    <button onClick={() => setProfilePage('foodHistory')} className={` ${profilePage === 'foodHistory' ? 'border-gray-900' : 'border-transparent'} px-0 py-4 text-xs font-bold tracking-wide text-gray-400 uppercase border-b-2 sm:px-5 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap`}> Food History </button>
                                </nav>
                            </div>

                            {profilePage === 'details' && <Details />}
                            {profilePage === 'allergens' && <Allergens />}
                            {profilePage === 'foodHistory' && <FoodHistory />}

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile