import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/animations/homePersonAnimation.json";

function Content() {
  return (
    <div
      id="content"
      className="bg-customBackground min-h-screen flex flex-col items-center justify-center px-4 mt-20"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-4xl space-y-16 lg:space-y-0 lg:space-x-8 mb-16 mt-20">
        <div className="text-center lg:text-left max-w-lg p-10">
          <h1 className="text-white text-4xl font-bold mb-5">
            Hello! I’m Lucas Di Luca.
          </h1>
          <p className="text-white mb-6 font-medium">
            I'm a Front-End Developer passionate about creating attractive and
            functional web interfaces. Skilled in HTML, CSS, and JavaScript,
            with experience in React, I turn ideas into engaging digital
            experiences.
          </p>
          <button className="bg-customHover py-2 px-6 text-white font-semibold rounded-md hover:bg-customButtons transform transition duration-300 hover:scale-105">
            Explorar
          </button>
        </div>
        <div className="w-full lg:w-1/2 max-w-md">
          <Player
            autoplay
            loop
            src={animationData}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </div>
      {/* <Skills /> */}
    </div>
  );
}

export default Content;
