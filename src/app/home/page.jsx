import BlogVideoSection from "@/components/blogVideoSection/BlogVideoSection";
import React from "react";
import HeroSection from "@/components/HeroSection";
import WhoAreWe from "@/components/WhoAreWeSection";
import SubscribeSection from "@/components/SubscribeSection";
import PastEventsSection from "@/components/PastEventsSection";

// import data
import pastEvents from "@/data/pastEvents";

const Home = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="text-black flex flex-col w-full">
        <HeroSection />
        <WhoAreWe />
        {/* <BlogVideoSection /> */}
        {pastEvents.length > 0 && <PastEventsSection pastEvents={pastEvents} />}
        <SubscribeSection />
      </div>
    </div>
  );
};

export default Home;
