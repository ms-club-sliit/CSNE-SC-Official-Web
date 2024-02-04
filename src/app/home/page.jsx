"use client";
import HeroSection from "@/components/HeroSection";
import React from "react";
import SubscribeSection from "@/components/SubscribeSection";

const Home = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="text-black flex w-full">
        <HeroSection />
        <SubscribeSection />
      </div>
    </div>
  );
};

export default Home;
