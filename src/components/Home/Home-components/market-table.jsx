import React, { useState } from "react";

const Marketmovers = () => {
  const [exchange, setExchange] = useState("NSE");

  const weekHighs = {
    NSE: [
      { company: "Indian Railway Finance", price: 113.6, dayHigh: 114.8 },
      { company: "Primove Infrastructure", price: 277.6, dayHigh: 277.6 },
      { company: "HCL Tech", price: 1528.0, dayHigh: 1529.9 },
    ],
    BSE: [
      { company: "ONGC", price: 226.4, dayHigh: 227.0 },
      { company: "Colgate", price: 6920.7, dayHigh: 6446.0 },
      { company: "Infosys", price: 1525.0, dayHigh: 1530.0 },
    ],
  };

  const weekLows = {
    NSE: [
      { company: "Mukesh Babu Fin Serv", price: 149.1, change: 20 },
      { company: "Jupiter Infomedia", price: 50.2, change: 19.98 },
      { company: "Jigar Cables", price: 66.45, change: 19.85 },
    ],
    BSE: [
      { company: "Zodiac Ventures", price: 43.84, change: 16.33 },
      { company: "Mitcon Consultancy", price: 105.85, change: 16.08 },
      { company: "Ashiana Housing", price: 311.35, change: 14.97 },
    ],
  };

  return (
    <div className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-black">Market Movers</h2>
      <p className="text-gray-500 mb-6">
        Learn about stock market updates today – 52 Week Highs, 52 Week Lows, and more.
      </p>

      {/* Exchange Switch */}
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 text-sm font-semibold rounded-md transition ${
            exchange === "NSE" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
          }`}
          onClick={() => setExchange("NSE")}
        >
          NSE
        </button>
        <button
          className={`px-4 py-2 text-sm font-semibold rounded-md transition ${
            exchange === "BSE" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
          }`}
          onClick={() => setExchange("BSE")}
        >
          BSE
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
  {/* 52 Week High */}
  <div className="border-none rounded-lg shadow-md bg-white">
    <h3 className="text-lg font-semibold px-4 py-3 border-b bg-gray-100 text-gray-700">
      📈 52 Week High ({exchange})
    </h3>
    <table className="w-full border border-blue-300 rounded-lg border-separate border-spacing-0">
      <thead>
        <tr className="text-left text-blue-600 bg-blue-50 uppercase text-sm">
          <th className="p-4">Company</th>
          <th className="p-4">Price ₹</th>
          <th className="p-4">Day High ₹</th>
        </tr>
      </thead>
      <tbody>
        {weekHighs[exchange].map((stock, index) => (
          <tr key={index} className="border-t border-blue-300 w-[95%] mx-auto hover:bg-gray-100 transition">
            <td className="p-4">{stock.company}</td>
            <td className="p-4 font-medium">{stock.price}</td>
            <td className="p-4 font-medium">{stock.dayHigh}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* 52 Week Low */}
  <div className="border-none rounded-lg shadow-md bg-white">
    <h3 className="text-lg font-semibold px-4 py-3 border-b bg-gray-100 text-gray-700">
      📉 52 Week Low ({exchange})
    </h3>
    <table className="w-full border border-blue-300 rounded-lg border-separate border-spacing-0">
      <thead>
        <tr className="text-left text-blue-600 bg-blue-50 uppercase text-sm">
          <th className="p-4">Company</th>
          <th className="p-4">Price ₹</th>
          <th className="p-4">Change %</th>
        </tr>
      </thead>
      <tbody>
        {weekLows[exchange].map((stock, index) => (
          <tr key={index} className="border-t border-blue-300 w-[95%] mx-auto hover:bg-gray-100 transition">
            <td className="p-4">{stock.company}</td>
            <td className="p-4 font-medium">{stock.price}</td>
            <td className="p-4">
              <div
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  stock.change > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}
              >
                {stock.change > 0 ? "+" : ""}
                {stock.change}%
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
    </div>
  );
};

export default Marketmovers;
