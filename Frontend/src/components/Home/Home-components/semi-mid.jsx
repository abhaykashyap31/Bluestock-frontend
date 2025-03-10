import React, { useState } from 'react';
import thumbEmoji from './assets/thumb-emoji.png'; // Replace with actual image path
import moneyImage from './assets/money.png'; // Replace with actual image path
import pearlImage from './assets/pearl.png'; // Replace with actual image path

function Semi() {
  const [image, setImage] = useState(thumbEmoji);
  const [text, setText] = useState(
    'Beautiful UI for the modern trader, with access on all platforms, to trade on the go.'
  );

  const handleClick = () => {
    if (image === thumbEmoji) {
      setImage(moneyImage);
      setText(
        'First of a kind innovation that lets you easily Create Strategies and deploy to markets, as easy as plotting charts.'
      );
    } else if (image === moneyImage) {
      setImage(pearlImage);
      setText(
        'Beautiful UI for the modern trader, with access on all platforms, to trade on the go.'
      );
    } else {
      setImage(thumbEmoji);
      setText(
        'Beautiful UI for the modern trader, with access on all platforms, to trade on the go.'
      );
    }
  };

  return (
    <div className="p-6 flex flex-col items-center text-center lg:flex-row lg:justify-between w-full">
      {/* Left Section (Heading) */}
      <div className="lg:w-1/2 w-full text-center lg:text-left">
      <p className="text-gray-400 font-bold text-2xl md:text-xl sm:text-lg mb-4">
        Built for Growing India
        </p>
        <h1 className="text-black font-extrabold text-5xl md:text-4xl sm:text-3xl">
          It's Easy
          <br />
          It's Powerful
          <br />
          <span className="bg-gradient-to-r from-purple-900 via-purple-500 to-purple-200 text-transparent bg-clip-text">
            It's Beautiful
          </span>
        </h1>
      </div>
      
      {/* Right Section (Clickable Image and Text) */}
      <div
        className="lg:w-1/2 w-full flex flex-col items-center justify-center text-center cursor-pointer mt-6 lg:mt-0"
        onClick={handleClick}
      >
        <img src={image} alt="Dynamic Image" className="w-52 md:w-48 sm:w-40 object-contain" />
        <p className="text-gray-700 text-xl md:text-lg sm:text-base mt-4 font-semibold">{text}</p>
      </div>
    </div>
  );
}

export default Semi;