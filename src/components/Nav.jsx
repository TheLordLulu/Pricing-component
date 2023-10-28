import React, { useState } from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <nav className=" pb-4 flex mt-[-40px] justify-between items-center ">
        {/* Left side options */}
        <div className="flex items-center  space-x-6 ">
          <a href="/" className="text-gray-500 text-lg hover:text-[#9FDE6A]">
            Home
          </a>
          <a href="/" className="text-gray-500 text-lg hover:text-[#9FDE6A]">
            Features
          </a>

          <a href="/pricing" className="text-gray-500 text-lg hover:text-[#9FDE6A]">
            Pricing
          </a>
        </div>

        {/* Right side buttons */}
        <div className="flex space-x-7">
          <a href="/login" className=" bg-white text-lg text-gray-500 hover:text-[#9FDE6A]">
            Log in
          </a>
          <a
            href="/signup"
            className=" bg-[#1A5402]  text-white text-lg rounded-md hover:text-gray-500 px-4 py-2"
          >
            Sign Up
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
