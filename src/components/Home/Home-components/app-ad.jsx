import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import appImage from './assets/app-image.png'; // Replace with actual image path

function AppAd() {
  return (
    <div className="p-6 flex items-center justify-between lg:flex-row flex-col text-left">
      {/* Left Section */}
      <div className="lg:w-1/2 w-full">
        <h1 className="text-black font-bold text-2xl md:text-xl sm:text-lg flex items-center space-x-2">
          <button className="bg-green-500 text-white px-3 py-1 rounded-md cursor-default">New</button>
          <span className="text-3xl font-bolder">App 2.0 Free and Open</span>
        </h1>
        <p className="text-gray-700 mt-2 text-lg md:text-base sm:text-sm font-medium">
          Stockmarket analytics for Gen-Z, early access to thousands of traders and investors.
          
        </p>
        <span className="mt-16 font-bold">Get early access</span>
         
        {/* Input Box - Fixed width issues */}
        <div className="mt-4 flex items-center shadow-md rounded-md overflow-hidden w-full max-w-md p-2">
          <span className="bg-white-100 px-3 py-2 text-gray-700 font-bold">+91</span>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="flex-1 px-3 py-2 outline-none text-gray-700 bg-white"
            maxLength={10}
          />
          {/* Fixed submit button */}
          <button className="bg-blue-600 p-3 text-white flex items-center justify-center rounded-md">
            <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </div>
      </div>
      
      {/* Right Section */}
      <div className="lg:w-1/2 w-full flex justify-center mt-6 lg:mt-0">
        <img src={appImage} alt="App Preview" className="w-full h-auto rounded-lg" />
        </div>
    </div>
  );
}

export default AppAd;