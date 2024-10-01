import React from 'react'

function page() {
  return (
  // pages/index.js

      <div className="min-h-screen bg-gray-100">
   
        <nav className="flex items-center p-4 bg-white shadow">
          <button className="text-xl">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <h1 className="ml-4 text-xl font-bold">UPCOMING EVENTS</h1>
        </nav>
        <main className="p-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Achievements</h2>
            <p className="text-sm text-gray-500">30 June 2018 3:04 pm</p>
            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-2xl font-bold">839201</p>
                <p className="text-sm text-gray-500">Avg Steps</p>
              </div>
              <div>
                <p className="text-2xl font-bold">323</p>
                <p className="text-sm text-gray-500">Total Kilometers</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-500">23/20</p>
                <p className="text-sm text-gray-500">Heart Points</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              All are going good continue daily walking more than <span className="font-bold">60 min</span> to maintain your health
            </p>
            <button className="mt-4 w-full py-2 bg-yellow-400 text-white font-bold rounded-lg">Your Rewards</button>
          </div>
          <h2 className="mt-8 text-lg font-bold">UPCOMING EVENTS</h2>
        </main>
      </div>
    );
  }

export default page