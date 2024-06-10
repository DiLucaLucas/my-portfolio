import React from "react";
import Slider from "react-slick";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from '../assets/animations/ComputerAnimation.json';

const projectsData = [
  {
    title: "Portfolio Empresarial",
    description: "Portfolio Web",
    image: "path/to/project1-image.jpg",
    link: "https://github.com/username/project1",
    liveDemo: "https://project1-live-demo.com",
  },
  {
    title: "MenuApp - Restaurant",
    description: "Application Mobile for Restaurant",
    image: "path/to/project2-image.jpg",
    link: "https://github.com/username/project2",
    liveDemo: "https://project2-live-demo.com",
  },
  {
    title: "E-Book",
    description: "Electronic Book for School",
    image: "path/to/project2-image.jpg",
    link: "https://github.com/username/project2",
    liveDemo: "https://project2-live-demo.com",
  },
  {
    title: "My Portfolio",
    description: "This Portfolio",
    image: "path/to/project2-image.jpg",
    link: "https://github.com/username/project2",
    liveDemo: "https://project2-live-demo.com",
  },
];

const ProjectsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div id="projects" className="bg-customBackground py-12 pb-40 pt-60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-white text-5xl font-bold text-center mb-3">
          Projects
        </h3>
        <span className="block w-48 h-1 bg-customButtons mt-1 mb-20 mx-auto"></span>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 max-w-lg lg:max-w-none mb-8 lg:mb-0 lg:mr-8">
            <Player
              autoplay
              loop
              src={animation}
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className="w-full lg:w-1/2 max-w-lg lg:max-w-none">
            <Slider {...settings}>
              {projectsData.map((project, index) => (
                <div key={index} className="p-6">
                  <div className="bg-customCards p-6 rounded-lg shadow-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-32 object-cover mb-4 rounded-lg"
                    />
                    <h4 className="text-white text-xl font-medium mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex space-x-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-customButtons hover:text-gray-400"
                      >
                        GitHub
                      </a>
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-customButtons hover:text-gray-400"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSlider;
