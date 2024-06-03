import React from "react";
import { Link as ScrollLink } from "react-scroll";
function Nav() {
  return (
    <>
      <div className="flex items-center justify-between lg:justify-around lg:p-4">
        <div className="flex-shrink-0">
          <img src="./icons/Group.png" alt="Logo" className="h-8" />
        </div>
        <div className="hidden lg:flex space-x-6 text-black font-medium lg:ml-20">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="text-red-500 hover:text-gray-300 cursor-pointer"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-gray-300 cursor-pointer"
          >
            About Us
          </ScrollLink>
          <ScrollLink
            to="pricing"
            smooth={true}
            duration={500}
            className="hover:text-gray-300 cursor-pointer"
          >
            Pricing
          </ScrollLink>
          <ScrollLink
            to="features"
            smooth={true}
            duration={500}
            className="hover:text-gray-300 cursor-pointer"
          >
            Features
          </ScrollLink>
        </div>
        <div className="hidden lg:flex space-x-6 text-black font-medium"></div>
        <div>
          <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Download
          </button>
        </div>
      </div>
      <div className="absolute right-4 lg:right-20 top-4 lg:p-4">
        <img src="./icons/Star 1.png" alt="Star" className="h-8" />
      </div>
    </>
  );
}

export default Nav;
