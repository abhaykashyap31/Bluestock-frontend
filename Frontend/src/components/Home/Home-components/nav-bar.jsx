import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "./assets/bluestock-logo.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Bluestock Logo" className="h-10 md:h-8 sm:h-6" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg md:text-base sm:text-sm">
        {['Products', 'Community', 'Media', 'Support', 'Live News'].map((link) => (
          <button
            key={link}
            className="text-gray-500 font-bold hover:text-blue-600 transition-colors bg-transparent border-none cursor-pointer text-lg"
          >
            {link}
          </button>
        ))}
      </div>


        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="border border-blue-600 px-4 py-2 rounded-md text-blue-600 hover:bg-blue-600 hover:text-white transition">
            Sign In
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Sign Up Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          {['Products', 'Community', 'Media', 'Support', 'Live News'].map((link) => (
            <button
              key={link}
              className="block w-full py-2 text-lg text-center hover:text-blue-600 transition-colors bg-transparent border-none cursor-pointer"
            >
              {link}
            </button>
          ))}
          <div className="mt-4 text-center space-y-2">
            <button className="w-full border border-blue-600 px-4 py-2 rounded-md text-blue-600 hover:bg-blue-600 hover:text-white transition">
              Sign In
            </button>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Sign Up Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
