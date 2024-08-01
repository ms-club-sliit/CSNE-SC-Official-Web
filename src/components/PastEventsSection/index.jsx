import React from "react";
import ImageCarousel from "@/components/ImageCarousel";
import data from "@/data/events/Events.json";

const PastEventsSection = () => {
  let idCounter = 1;
  const transformed = [];

  Object.keys(data).forEach((year) => {
    data[year].forEach((event) => {
      transformed.push({
        id: idCounter++,
        image: `/images/${event.image}`,
        title: event.name,
      });
    });
  });

  const reversedTransformed = transformed.reverse();

  return (
    <div className="container mx-auto my-10 px-10 lg:px-0">
      <div className="text-4xl lg:text-5xl font-bold text-center lg:text-left mb-12 lg:ml-10">
        Past Events
      </div>
      <div className="lg:ml-24 min-h-[300px]">
        {reversedTransformed.length > 0 ? (
          <ImageCarousel slides={reversedTransformed} />
        ) : (
          <div className="text-base lg:text-xl text-center mb-12 lg:ml-10">
            No events found
          </div>
        )}
      </div>
    </div>
  );
};

export default PastEventsSection;
