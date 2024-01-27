"use client";
import HeroSection from "@/components/HeroSection";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="h-[100vh] text-black bg-white flex w-full">
          <HeroSection />
        </div>
      </div>
    </>
  );
};

export default Home;
