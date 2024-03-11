import React from "react";
import ImageCarousel from "@/components/ImageCarousel";

const PastEventsSection = ({ pastEvents }) => {
  return (
    <div className="container mx-auto my-10 px-10 lg:px-0">
      <div className="text-4xl lg:text-5xl font-bold text-center lg:text-left mb-12">
        Past Events
      </div>
      <div className="lg:ml-24 min-h-[300px]">
        <ImageCarousel slides={pastEvents} />
      </div>
    </div>
  );
};

export default PastEventsSection;
