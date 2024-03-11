import React from "react";
import VideoSection from "./VideoSection";
import AllBlogSection from "./AllBlogSection";

const BlogVideoSection = () => {
  return (
    <div className="flex flex-col lg:pl-20 gap-10 pb-20 pt-10">
      <AllBlogSection />
      <VideoSection />
    </div>
  );
};

export default BlogVideoSection;
