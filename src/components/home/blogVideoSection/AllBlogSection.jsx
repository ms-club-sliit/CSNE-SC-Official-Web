import React from "react";
import BlogVideoCard from "./BlogVideoCard";

const data = [
  {
    icon: "../../assets/home/blogVideo/test.jpg",
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
  {
    icon: "../../assets/home/blogVideo/box.png",
    title: "What is Github?",
    description: "Protocols apart from aengage models, pricing billing",
  },
  {
    icon: "../../assets/home/blogVideo/box.png",
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
  {
    icon: "../../assets/home/blogVideo/box.png",
    title: "What is Github?",
    description: "Protocols apart from aengage models, pricing billing",
  },
];

const AllBlogSection = () => {
  return (
    <div className="max-w-2xl mt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex flex-col sm:flex-row gap-8 items-center">
        <div className="text-[40px] font-bold bg-[#FFF5DB] pl-[30px] pt-[50px] pr-[20px] pb-[20px] rounded-tl-[100px]">
          Blogs
        </div>
        <div className="flex flex-col bg-[#F4F9FF] sm:flex-row gap-4 sm:gap-10">
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

export default AllBlogSection;
