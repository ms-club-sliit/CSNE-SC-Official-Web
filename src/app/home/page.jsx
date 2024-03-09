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
      {/* <div className="flex items-center justify-center">
        <div className="container h-[100vh] bg-white flex items-center justify-center">
          <p className="text-4xl font-bold">Home Page</p>
        </div>
  </div> */}
        <BlogVideoSection />
      </div>
    </div>
  );
};

export default Home;
