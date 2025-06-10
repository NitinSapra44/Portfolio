import React from "react";

export default function InventoryManagement() {
    return (
        <div className="w-11/12 mx-auto sm:w-full flex flex-col items-center justify-center border rounded-lg shadow-xl p-6 my-8">
            <div className="flex flex-col items-center justify-center text-center">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-800">Inventory Manager</h3>
                <div className="mt-6 flex flex-col justify-center items-center">
                    <img src="/sp.png" alt="Sapra Packers logo" className="w-48 sm:w-64"/>
                    <p className="text-xl sm:text-2xl font-semibold text-red-600 mt-3">Sapra Packers</p>
                </div>
                <p className="text-base sm:text-md mt-4 max-w-prose text-gray-700">
                    A web application designed to streamline the management of stock, orders, and suppliers for a printing business.
                </p>
                <div className="flex gap-3 flex-wrap justify-center mt-5">
                    <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">React</span>
                    <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Node.js</span>
                    <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">MongoDB</span>
                </div>
                <div className="mt-6 flex gap-4 flex-col sm:flex-row">
                    <a
                        href="https://inventory-management-frontend-eugc.onrender.com/"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out text-center"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Live Demo
                    </a>
                    <a
                        href="https://github.com/NitinSapra44/Inventory-Management"
                        className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out text-center"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Code
                    </a>
                </div>
                <div className="text-xs text-center mt-6 text-gray-500">
                    <p>(Please allow some time after loading the demo, as the backend server might take a moment to start.)</p>
                </div>
            </div>
        </div>
    );
}