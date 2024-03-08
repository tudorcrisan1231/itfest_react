import React, { Component } from 'react'

function Allergens() {
    return (
        <>
            <div className="flow-root mt-6">
                <ul className="-my-5 divide-y divide-gray-200">
                    <li className="flex items-center justify-between py-5">
                        <p className="text-sm font-medium text-gray-600">Alergeni:</p>
                        <p className="text-sm font-bold text-gray-900">Arachide, lactate, gluten</p>
                    </li>

                    <li className="flex items-center justify-between py-5">
                        <p className="text-sm font-medium text-gray-600">Reacții alergice:</p>
                        <p className="text-sm font-bold text-gray-900">Urticarie, dificultăți de respirație</p>
                    </li>

                    <li className="flex items-center justify-between py-5">
                        <p className="text-sm font-medium text-gray-600">Simptome alergice:</p>
                        <p className="text-sm font-bold text-gray-900">Mâncărime, umflături, senzație de sufocare</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Allergens