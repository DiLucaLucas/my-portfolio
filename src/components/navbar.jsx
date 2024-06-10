import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Icon from "../assets/logo/logotipo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-customBackground py-4  w-full fixed top-0 z-10 border-4 border-customButtons">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex-shrink-0 ml-4">
          <img src={Icon} alt="Logo" className="h-12 w-12" />
        </div>

        <div className="hidden md:flex space-x-4 items-center px-12">
          <a
            href="/"
            className="text-white font-semibold hover:bg-customButtons py-2 px-4 rounded-sm transform transition duration-300 hover:scale-105"
          >
            Home
          </a>
          <a
            href="#skills"
            className="text-white font-semibold hover:bg-customButtons py-2 px-4 rounded-sm transform transition duration-300 hover:scale-105"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-white font-semibold hover:bg-customButtons py-2 px-4 rounded-sm transform transition duration-300 hover:scale-105"
          >
            Projects
          </a>
          <a
            href="#footer"
            className="text-white font-semibold hover:bg-customButtons py-2 px-4 rounded-sm transform transition duration-300 hover:scale-105"
          >
            Contact
          </a>
        </div>

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
          <div ref={ref} className="md:hidden bg-customBackground">
            <div className="flex flex-col items-center">
              <a
                href="#home"
                className="text-white font-semibold hover:bg-customButtons py-2 px-4 w-full block"
              >
                Home
              </a>
              <a
                href="#skills"
                className="text-white font-semibold hover:bg-customButtons py-2 px-4 w-full block"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-white font-semibold hover:bg-customButtons py-2 px-4 w-full block"
              >
                Projects
              </a>
              <a
                href="#footer"
                className="text-white font-semibold hover:bg-customButtons py-2 px-4 w-full block"
              >
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
