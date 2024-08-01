import React from "react";
import ImageCarousel from "@/components/ImageCarousel";
import youtubeVideos from "@/data/YoutubeVideos/youtubeVideos.json";

const YoutubeVideoSection = () => {
  return (
    <div className="container mx-auto my-10 px-10 lg:px-0">
      <div className="text-4xl lg:text-5xl font-bold text-center lg:text-left mb-12 lg:ml-10">
        Youtube Videos
      </div>
      <div className="lg:ml-24 min-h-[300px]">
        {youtubeVideos.length > 0 ? (
          <ImageCarousel slides={youtubeVideos} />
        ) : (
          <div className="text-base lg:text-xl text-center mb-12 lg:ml-10">
            No videos found
          </div>
        )}
      </div>
    </div>
  );
};

export default YoutubeVideoSection;
