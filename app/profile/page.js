import React from "react";


export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white p-6 shadow-md flex justify-between items-center">
        <div className="text-2xl font-bold">Profile</div>
        <div className="flex items-center space-x-4">
          <img src="notification_i.svg" alt="Notifications" className="w-6 h-6" />
          <img src="setting_i.svg" alt="Settings" className="w-6 h-6" />
        </div>
      </header>
      <main className="p-6">
        <div className="flex flex-col items-center">
          <div className="relative">
            <img src="profile_img.png" alt="Profile" className="w-32 h-32 rounded-full" />
            <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md">
              <img src="camra_i.svg" alt="Edit" className="w-6 h-6" />
            </button>
          </div>
          <h2 className="text-xl font-semibold mt-4">Your Details</h2>
        </div>
        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-600">NAME</label>
            <div className="text-lg">Emma Simpson</div>
          </div>
          <div>
            <label className="block text-gray-600">MOBILE NUMBER</label>
            <div className="text-lg">+91 123456789</div>
          </div>
          <div>
            <label className="block text-gray-600">E-MAIL ADDRESS</label>
            <div className="text-lg">emma123@gmail.com</div>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <label className="block text-gray-600">SELECT PREFERRED LOCATION</label>
              <div className="text-lg">Dehradun</div>
            </div>
            <button className="p-2">
              <img src="arrow_i.svg" alt="Edit" className="w-6 h-6" />
            </button>
          </div>
          <div>
            <label className="block text-gray-600">YOUR GENDER</label>
            <div className="text-lg">FEMALE</div>
          </div>
        </div>
      </main>
    </div>
  );
}