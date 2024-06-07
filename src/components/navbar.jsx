import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import LDLDevIcon from "../assets/LDLDevIcon.png"; // Importar la imagen

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-custom-blue py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Left side: Logo */}
        <div className="flex-shrink-0">
          <img src={LDLDevIcon} alt="Logo" className="h-14" />
        </div>

        {/* Right side: Menu button and links */}
        <div className="hidden md:flex space-x-4 items-center">
          <a
            href="/"
            className="text-white font-semibold hover:bg-customHover py-2 px-4 rounded-sm"
          >
            Home
          </a>
          <a
            href="/skills"
            className="text-white font-semibold hover:bg-customHover py-2 px-4 rounded-sm"
          >
            Skills
          </a>
          <a
            href="/about"
            className="text-white font-semibold hover:bg-customHover py-2 px-4 rounded-sm"
          >
            About Me
          </a>
          <a
            href="/contact"
            className="text-white font-semibold hover:bg-customHover py-2 px-4 rounded-sm"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 focus:outline-none"
          >
            {isOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {(ref) => (
          <div ref={ref} className="md:hidden bg-custom-blue">
            <div className="flex flex-col items-center">
              <a
                href="/"
                className="font-weight: 700 text-white font-semibold hover:bg-customHover py-2 px-4 w-full block"
              >
                Home
              </a>
              <a href="/skills" className="text-white font-semibold hover:bg-customHover py-2 px-4 w-full block">
                Skills
              </a>
              <a href="/about" className="text-white font-semibold hover:bg-customHover py-2 px-4 w-full block">
                About Me
              </a>
              <a href="/contact" className="text-white font-semibold hover:bg-customHover py-2 px-4 w-full block">
                Contact
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
