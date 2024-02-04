import HeroSection from "../../components/HeroSection";
import React from "react";
import WhoAreWe from "../../components/WhoAreWeSection";

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="text-black flex flex-col w-full">
          <HeroSection />
          <WhoAreWe />
        </div>
      </div>
    </>
  );
};

export default Home;
