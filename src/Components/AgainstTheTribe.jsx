import React from "react";

export default function AgainstTheTribe() {
    return (
        <div className="w-11/12 mx-auto sm:w-full flex flex-col items-center justify-center border rounded-lg shadow-xl p-6 my-8">
            <div className="flex flex-col items-center justify-center text-center">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-800">E-commerce Store</h3>
                <div className="mt-6 flex flex-col justify-center items-center">
                    {/* Added alt attribute for accessibility */}
                    <img src="/att logo.jpg" alt="Against The Tribe logo" className="w-64 sm:w-96"/>
                    <p className="text-xl sm:text-2xl font-semibold text-red-600 mt-3">Against The Tribe</p>
                </div>
                <p className="text-base sm:text-md mt-4 max-w-prose text-gray-700">
                    A fully functional e-commerce web application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). This store allows users to browse products, add items to a shopping cart, and securely complete purchases with **Razorpay** payment integration.
                </p>
                <div className="flex gap-3 flex-wrap justify-center mt-5">
                    {/* Enhanced badge styling */}
                    <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">React</span>
                    <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Node.js</span>
                    <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">MongoDB</span>
                    <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">Express.js</span>
                    <span className="bg-pink-200 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold">Razorpay</span>
                </div>
                <div className="mt-6 flex gap-4 flex-col sm:flex-row">
                    {/* Styled buttons for consistency and added target/rel for external links */}
                    <a
                        href="https://againstthetribe-shop.onrender.com/"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out text-center"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Live Demo
                    </a>
                    <a
                        href="https://github.com/NitinSapra44/AgainstTheTribe"
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
