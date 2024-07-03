import { useState } from "react";
import "./Nav.css"

import logo from "../../assets/logo dark.png"

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

    return (
        <nav className="max-w-7xl mx-auto  py-6">
      <div className=" flex justify-between items-center">
        {/* Mobile Menu */}
        <div className="flex items-center lg:hidden">
          <button onClick={toggle} className="text-gray-800 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
        </div>

        {/* Logo */}
        <div className="flex justify-center lg:justify-start">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-8">
          <a href="/" className="text-xl text-[#020043] font-medium">Home</a>
          <a href="/services" className="text-xl text-[#020043] font-medium">Services</a>
          <a href="/blog" className="text-xl text-[#020043] font-medium">Blog</a>
          <a href="/about" className="text-xl text-[#020043] font-medium">About Us</a>
        </div>

        {/*  Button */}
        <div className="hidden lg:block">
          <button className="px-4 text-[#020043] text-xl font-medium py-2 rounded-xl border border-[#343268]">
            Appointment &#x2197;
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <ul className="bg-white shadow-lg rounded-box mt-3 p-2 space-y-2 text-[#020043] font-medium">
            <li><a href="/" className="block px-3 py-2 rounded-md">Home</a></li>
            <li><a href="/services" className="block px-3 py-2 rounded-md">Services</a></li>
            <li><a href="/blog" className="block px-3 py-2 rounded-md">Blog</a></li>
            <li><a href="/about" className="block px-3 py-2 rounded-md">About Us</a></li>
            <li>
              <button className="w-full bg-white text-[#020043] text-xl font-medium py-2 rounded-xl border border-[#343268] mt-2">
                Appointment &#x2197;
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav> 
    );
};

export default Nav;