import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col lg:flex-row">
      <div className="lg:text-left text-center mt-4 lg:pl-16 lg:flex-1 relative z-10">
        <h1 className="text-4xl lg:text-4xl font-bold leading-tight">
          CSNE <br /> Student <br /> Community
        </h1>
        <p className="mt-6 lg:mt-10 text-gray-700 max-w-sm mx-auto lg:mx-0">
          Welcome to the hub of collaboration, learning, and networking for
          computer science and network engineering students. Together, we shape
          the future of technology.
        </p>
        <button className="bg-[#1D1163] text-white px-6 py-3 rounded-full mt-8 text-lg">
          Join Now
        </button>
      </div>

      <div className="lg:flex-1 lg:ml-0 mx-auto relative z-10">
        <div
          className="bg-blue-200 rounded-full h-10 w-16 z-20"
          style={{
            borderBottomLeftRadius: "2rem",
            borderBottomRightRadius: "2rem",
          }}
        />

        <div className="ml-auto">
          <img
            src="/static/CSNE-hero-section.png"
            alt="CSNE Hero Section"
            className="mx-0"
            style={{
              height: "auto",
              maxWidth: "100%",
              borderRadius: "0px 0px 0px 200px",
            }}
          />
        </div>
        <div
          className="bg-[#FFF5DB] absolute right-0 mb-4 mr-8"
          style={{
            width: "80px",
            height: "50px",
            borderRadius: "0% 0% 50% 0%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default HeroSection;
