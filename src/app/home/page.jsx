import BlogVideoSection from "@/components/blogVideoSection/BlogVideoSection";
import React from "react";
import HeroSection from "@/components/HeroSection";
import WhoAreWe from "@/components/WhoAreWeSection";
import SubscribeSection from "@/components/SubscribeSection";

const Home = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="text-black flex flex-col w-full">
        <HeroSection />
        <WhoAreWe />
        <SubscribeSection />
        <BlogVideoSection />
      </div>
    </div>
  );
};

export default Home;
