"use client"
import React from 'react';

const Page = () => {
  const activities = [
    'Running',
    'Swimming',
    'Cycling',
    'Skate',
    'Rock Climb',
    'Walk',
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Matchup</h1>
        <p className="text-lg">Find Your Fitness Partner In Your Area</p>
      </header>
      <main className="w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Interested In</h2>
        <div className="flex flex-col space-y-4">
          {activities.map((activity, index) => (
            <button
              key={index}
              className={`w-full py-3 rounded-lg text-lg font-medium transition duration-300 ${
                activity === 'Walk' ? 'bg-yellow-400 text-black' : 'bg-white text-black hover:bg-gray-300'
              }`}
              onClick={() => alert(`Selected: ${activity}`)}
            >
              {activity}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page;