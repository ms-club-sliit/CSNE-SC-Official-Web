import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col lg:flex-row">
      <div className="lg:text-left text-center lg:pl-16 pt-16 lg:flex-1 relative z-10">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          CSNE <br /> Student <br /> Community
        </h1>
        <p className="text-lg mt-6 lg:mt-10 text-gray-700 max-w-sm mx-auto lg:mx-0">
          Welcome to the hub of collaboration, learning, and networking for
          computer science and network engineering students. Together, we shape
          the future of technology.
        </p>
        <button
          className="text-white px-6 py-3 rounded-full mt-10 text-xl"
          style={{ backgroundColor: "#1D1163" }}
        >
          Join Now
        </button>
      </div>

      <div
        className="lg:flex-1 mt-10 lg:ml-0 mx-auto relative z-10"
        style={{ backgroundColor: "transparent" }}
      >
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
      </div>
    </div>
  );
};

export default HeroSection;
