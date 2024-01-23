import React from "react";
import BlogVideoCard from "./BlogVideoCard";
const data = [
  {
    icon: "../../assets/home/blogVideo/box.png",
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
  {
    icon: "../../assets/home/blogVideo/box.png",
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
  {
    icon: "../../assets/home/blogVideo/box.png",
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
  {
    icon: "/assets/home/blogVideo/box.png",
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
];

const VideoSection = () => {
  return (
    <div className="max-w-2xl mt-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex flex-col sm:flex-row gap-8 items-center">
        <div className="text-[40px] font-bold text-center pl-[30px]">
          Our Videos
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 ">
          {data.map((item) => (
            <div key={item.title}>
              <BlogVideoCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
