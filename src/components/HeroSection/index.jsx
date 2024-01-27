import React from "react";

const HeroSection = () => {
  return (
    <div className="container relative flex flex-col lg:flex-row">
      <div className="lg:w-1/3 lg:text-left text-center mx-auto lg:mr-8 w-full">
        <div className="lg:ml-hero-section-margin-left lg:mt-hero-section-margin-top">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            CSNE <br /> Student <br /> Community
          </h1>
          <p className="mt-6 lg:mt-10 text-gray-700 text-xl max-w-sm mx-auto lg:mx-0">
            Welcome to the hub of collaboration, learning, and networking for
            computer science and network engineering students. Together, we
            shape the future of technology.
          </p>
          <button className="bg-hero-section-button text-white text-xl px-6 py-3 rounded-full mt-8">
            Join Now
          </button>
        </div>
      </div>

      <div className="lg:w-2/3 lg:ml-8 lg:mr-0 mt-hero-image-margin-top mx-auto relative">
        <div className="bg-hero-section-shape rounded-full lg:ml-20 rounded-bl-2xl rounded-br-2xl h-10 w-16" />
        <div className="relative">
          <img
            src="/static/CSNE-hero-section.png"
            alt="CSNE Hero Section"
            className="mx-0 w-full lg:h-hero-section-image-height h-auto rounded-tl-0 rounded-tr-0 rounded-br-0 rounded-bl-hero-section-image"
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
