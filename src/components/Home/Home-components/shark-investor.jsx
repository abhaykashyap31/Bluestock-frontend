import React from 'react';
import videos from "./assets/play-btn.png"
import analytic from "./assets/equity.png"
import blog from "./assets/candles-blogs.png"

function Midpart() {

  return (
    <div className="flex flex-col items-center justify-center w-full p-6">
    {/* Why do traders love Bluestock? */}
    <div className="flex items-center justify-between w-full max-w-5xl p-6">
      <div className="text-left">
        <h2 className="text-black font-bold text-2xl">Why do traders love bluestock?</h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Bluestock caters to traders looking to enhance their technical analysis skills, providing a user-friendly 
          environment to interpret and leverage charts effectively for strategic decision-making in the financial markets.
        </p>
      </div>
      <div className="relative flex items-center">
      <div className="bg-gradient-to-r from-teal-400 to-blue-400 text-white font-bold p-4 rounded-full text-center">
          Shark Investor
        </div>
      </div>
    </div>

    {/* Resources Section */}
    <div className="flex items-center justify-between w-full max-w-5xl p-6">
      <div className="flex space-x-6">
      <div className="flex flex-col items-center text-center bg-yellow-100 p-4 rounded-2xl shadow-lg w-32">
        <img src={analytic} alt="Analytics" className="w-16 h-16" />
        <p className="mt-2 text-black font-medium">Analytics</p>
      </div>
      <div className="flex flex-col items-center text-center bg-blue-100 p-4 rounded-2xl shadow-lg w-32" >
      <a href="/Blogs" className="flex flex-col items-center"><img src={blog} alt="Blogs" className="w-16 h-16" />
        <p className="mt-2 text-black font-medium">Blogs</p>  </a> 
      </div>
      <div className="flex flex-col items-center text-center bg-red-100 p-4 rounded-2xl shadow-lg w-32">
        <img src={videos} alt="Videos" className="w-16 h-16" />
        <p className="mt-2 text-black font-medium">Videos</p>
      </div>
      </div>
      <div className="text-left ml-6">
        <span className="bg-green-300 text-black font-bold px-2 py-1 rounded text-sm">Resources</span>
        <h2 className="text-black font-bold text-2xl mt-2">All things finance, right here</h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Master the art of investing and secure your financial future with Bluestock learning resources.
        </p>
      </div>
    </div>
  </div>
  );
}

export default Midpart;

