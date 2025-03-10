import React, { useState } from "react";
import comparison from "./assets/comparison.png";
import angelone from "./assets/angelone-logo.png";
import zerodha from "./assets/zerodha-logo.png";
import upstox from "./assets/upstox-logo.png";
import groww from "./assets/groww-logo.png";
import icicidirect from "./assets/icici-direct-logo.png";

const brokerLogos = {
  "Angel One": angelone,
  "Zerodha": zerodha,
  "Upstox": upstox,
  "Groww": groww,
  "ICICI Direct": icicidirect,
};

function CompareInvestor() {
  const [broker1, setBroker1] = useState("Angel One");
  const [broker2, setBroker2] = useState("Zerodha");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-6">
      <h2 className="text-lg font-semibold text-gray-700">Compare and choose</h2>
      <h1 className="text-3xl font-bold text-blue-600 mt-1">Best Stock Broker for you</h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-6 bg-white p-8 rounded-xl shadow-md w-full max-w-4xl">
        {/* Left Section - Dropdowns */}
        <div className="flex flex-col items-center gap-4 w-full md:w-1/2">
          {/* Dropdown 1 */}
          <div className="flex items-center bg-gray-100 p-3 rounded-lg w-full">
            <img
              src={brokerLogos[broker1]}
              alt={broker1}
              className="w-8 h-8 mr-2"
            />
            <select
              className="bg-transparent text-gray-700 font-medium outline-none flex-grow"
              value={broker1}
              onChange={(e) => setBroker1(e.target.value)}
            >
              {Object.keys(brokerLogos).map((broker) => (
                <option key={broker} value={broker}>{broker}</option>
              ))}
            </select>
          </div>

          {/* Dropdown 2 */}
          <div className="flex items-center bg-gray-100 p-3 rounded-lg w-full">
            <img
              src={brokerLogos[broker2]}
              alt={broker2}
              className="w-8 h-8 mr-2"
            />
            <select
              className="bg-transparent text-gray-700 font-medium outline-none flex-grow"
              value={broker2}
              onChange={(e) => setBroker2(e.target.value)}
            >
              {Object.keys(brokerLogos).map((broker) => (
                <option key={broker} value={broker}>{broker}</option>
              ))}
            </select>
          </div>

          {/* Compare Button */}
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 w-full">
            Compare
          </button>
        </div>

        {/* Right Section - Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={comparison}
            alt="Comparison Illustration"
            className="max-w-xs sm:max-w-md"
          />
        </div>
      </div>
    </div>
  );
}

export default CompareInvestor;
