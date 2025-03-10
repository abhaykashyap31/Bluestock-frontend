import React from 'react';
import mobile from "./assets/mobile-ui.png";
import QR from "./assets/app-qr.png";
import Play from './assets/play-store.png';
import AppStore from './assets/app-store.jpg';

function Onthego() {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
    <div className="flex flex-col items-center justify-center w-full max-w-5xl p-1">
      {/* On The Go Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <div className="text-left max-w-md">
          <h2 className="text-black font-bold text-2xl">On The Go</h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            We believe that everyone should be able to wield technology while learning trading. Use Bluestock on the go, on your mobile device. Experience the ultimate trading experience on Android or iOS.
          </p>
          <div className="flex items-center mt-4 space-x-3">
            <img src={QR} alt="QR Code" className="w-16 h-16" />
            <div>
              <p className="text-blue-600 font-bold">Scan and download</p>
              <p className="text-gray-500 text-sm">Use your Android device to download the app</p>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-0">
          <img src={mobile} alt="Bluestock Mobile App" className="w-64" />
        </div>
      </div>
      {/* App Download Section */}
      <div className="mt-8 w-full bg-blue-100 p-4 text-center rounded-lg">
        <p className="text-blue-600 font-bold text-lg">Bluestock App  2.0 <span className="text-black">is Live Now!</span> </p>
        <p className="text-gray-500 text-sm mt-1">Download Our App</p>
        <div className="flex justify-center mt-3 space-x-4">
          <img src={Play} alt="Google Play" className="w-32 h-10" />
          <img src={AppStore} alt="App Store" className="w-32 h-11" />
        </div>
      </div>
    </div></div>
  );
}

export default Onthego;