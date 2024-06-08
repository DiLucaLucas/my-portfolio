import React from "react";
import htmlIcon from "../assets/icons/html5-icon.png";
import jsIcon from "../assets/icons/javascript-icon.png";
import reactIcon from "../assets/icons/react-icon.png";
import flutterIcon from "../assets/icons/flutter-icon.png";
import gitIcon from "../assets/icons/github-icon.png";
import figmaIcon from "../assets/icons/figma-icon.png";

const skillsData = [
  {
    title: "HTML & CSS",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    icon: htmlIcon,
  },
  {
    title: "JavaScript",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    icon: jsIcon,
  },
  {
    title: "React",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    icon: reactIcon,
  },
  {
    title: "Flutter",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    icon: flutterIcon,
  },
  {
    title: "Git",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    icon: gitIcon,
  },
  {
    title: "Figma",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    icon: figmaIcon,
  },
];

function Skills() {
  return (
    <div className="bg-customBackground py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-white text-5xl font-bold text-center">Skill-Set</h3>
        <span className="block w-1/4 h-1 bg-customButtons mt-1 mb-20 mx-auto"></span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-customCards p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl max-w-xs mx-auto"
            >
              <img
                src={skill.icon}
                alt={`${skill.title} icon`}
                className="mb-4 h-12 w-12 mx-auto"
              />
              <h4 className="text-white text-2xl font-medium mb-2 text-center">
                {skill.title}
              </h4>
              <p className="text-gray-300 text-center">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
