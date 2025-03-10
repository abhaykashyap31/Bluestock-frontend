import React from 'react';
import { FaPencilAlt, FaPaperPlane, FaBolt } from 'react-icons/fa';

function Notes() {
  return (
    <div className="flex flex-col items-center text-center p-6 mb-6">
      <p className="text-gray-400 text-lg md:text-base sm:text-sm mb-2">
        Power-packed with everything you need.
      </p>
      <h1 className="text-black font-extrabold text-4xl md:text-3xl sm:text-2xl mb-4">
        BlueStock Highlights
      </h1>
      <p className="text-gray-400 text-lg md:text-base sm:text-sm max-w-2xl mb-6">
        Simplified enough for beginners, Detailed enough for experts. Track upcoming IPOs, 
        Leverage advanced tools to make the best decisions.
      </p>
      
      {/* Feature Cards */}
      <div className="flex flex-wrap justify-center gap-6 text-left">
        
        {/* Learn Chart */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md w-72 mb-6">
          <h2 className="text-blue-800 font-extrabold text-xl flex items-center">
            <FaPencilAlt className="mr-2" /> Learn Chart
          </h2>
          <hr className="border-gray-400 my-4" />
          <ul className="mt-3 font-medium">
            <li className="flex items-center mb-2">
              <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span> 
              Technical, Fundamental
            </li>
            <li className="flex items-center mb-2">
              <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span> 
              Finology, Facts, Equity
            </li>
            <li className="flex items-center mb-2">
              <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span> 
              Trading Psychology
            </li>
            <li className="flex items-center mb-2">
              <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">4</span> 
              Risk Assessment
            </li>
            <li className="flex items-center mb-2">
              <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">5</span> 
              Option Trading
            </li>
          </ul>
        </div>
        
        {/* Analytics */}
        <div className="bg-red-50 p-6 rounded-lg shadow-md w-72 mb-6">
          <h2 className="text-blue-800 font-extrabold text-xl flex items-center">
            <FaPaperPlane className="mr-2" /> Analytics
          </h2><hr className="border-gray-400 my-4" />
          <ul className="mt-3 font-medium">
            <li className="flex items-center mb-2">
              <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span> 
              Live Sector Trend
            </li>
            <li className="flex items-center mb-2">
              <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span> 
              IPO DRHP
            </li>
            <li className="flex items-center mb-2">
              <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span> 
              Sectoral Distribution
            </li>
            <li className="flex items-center mb-2">
              <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">4</span> 
              Stock Overview
            </li>
            <li className="flex items-center mb-2">
              <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">5</span> 
              TradingView Chart
            </li>
            <li className="flex items-center mb-2">
              <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">6</span> 
              Technical, Fundamental
            </li>
          </ul>
        </div>
        
        {/* Club */}
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md w-72 mb-6">
          <h2 className="text-blue-800 font-extrabold text-xl flex items-center">
            <FaBolt className="mr-2" /> Club
          </h2><hr className="border-gray-400 my-4" />
          <ul className="mt-3 font-medium">
            <li className="flex items-center mb-2">
              <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span> 
              Educational Resources
            </li>
            <li className="flex items-center mb-2">
              <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span> 
              Real-time Chat
            </li>
            <li className="flex items-center mb-2">
              <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span> 
              Forums
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Notes;
