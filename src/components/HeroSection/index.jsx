import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col mb-28 lg:flex-row lg:w-full lg:my-28">
      <div className="container w-full p-5 mx-auto lg:w-1/3 lg:text-left text-center lg:mr-8 left-0 z-10">
        <div className=" lg:ml-12">
          <h1 className="text-4xl lg:max-w-sm lg:text-6xl font-bold leading-tight">
            CSNE Student <br /> Community
          </h1>
          <p className="mt-6 lg:mt-10 text-gray-700 lg:text-xl max-w-m mx-auto lg:mx-0">
            Welcome to the hub of collaboration, learning, and networking for
            computer science and network engineering students. Together, we
            shape the future of technology.
          </p>
          <button className="bg-hero-section-button text-white text-xl px-6 py-3 rounded-full mt-8">
            Join Now
          </button>
        </div>
      </div>
      <div className="lg:w-7/12 lg:ml-8 lg:mr-0 mx-auto right-0">
        <div className="bg-hero-section-shape rounded-full lg:ml-20 rounded-bl-2xl rounded-br-2xl h-10 w-16" />
        <div className="relative">
          <img
            src="/static/CSNE-hero-section.png"
            alt="CSNE Hero Section"
            className="mx-0 w-full h-auto rounded-tl-0 rounded-tr-0 rounded-br-0 rounded-bl-hero-section-image"
          />
          <div className="absolute right-0 mb-4 mr-8">
            <img
              className="w-20"
              src="/static/hero-scetion-rectangle.png"
              alt="CSNE Hero Section rectangle"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
