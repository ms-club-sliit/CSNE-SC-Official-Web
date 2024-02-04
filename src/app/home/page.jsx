"use client";
import HeroSection from "@/components/HeroSection";
import React from "react";
import WhoAreWe from "./WhoAreWe";

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="text-black flex w-full">
          <HeroSection />
          <WhoAreWe />
        </div>
      </div>
    </>
  );
};

export default Home;
