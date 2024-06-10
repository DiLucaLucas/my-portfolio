import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer id="footer" className="bg-customCards py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transform transition duration-300 hover:scale-105"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transform transition duration-300 hover:scale-105"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-di-luca-martin?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transform transition duration-300 hover:scale-105"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://github.com/LucasDiLuca26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transform transition duration-300 hover:scale-105"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="mailto:lucasmartindiluca@gmail.com"
              className="text-white hover:text-gray-400 transform transition duration-300 hover:scale-105"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
          {/* Enlaces de navegación */}
          <div className="flex space-x-6 text-white">
            <a
              href="/home"
              className="font-semibold hover:text-customButtons transform transition duration-300 hover:scale-105"
            >
              Home
            </a>
            <a
              href="/skills"
              className="font-semibold hover:text-customButtons transform transition duration-300 hover:scale-105"
            >
              Skills
            </a>
            <a
              href="/projects"
              className="font-semibold hover:text-customButtons transform transition duration-300 hover:scale-105"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="font-semibold hover:text-customButtons transform transition duration-300 hover:scale-105"
            >
              Contacto
            </a>
          </div>
          <div className="text-white text-center mt-5">
            <p>&copy; {new Date().getFullYear()} Designed by Lucas Di Luca</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
