import React from "react";
import BlogVideoCard from "./BlogVideoCard";
import { RiBox3Line } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
const data = [
  {
    icon: <RiBox3Line className="text-5xl text-blue-600" />,
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
  {
    icon: <IoWalletOutline className="text-5xl text-orange-300" />,
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
  {
    icon: <RiBox3Line className="text-5xl text-blue-600" />,
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
  {
    icon: <IoWalletOutline className="text-5xl text-orange-300" />,
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
  {
    icon: <RiBox3Line className="text-5xl text-blue-600" />,
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
  {
    icon: <IoWalletOutline className="text-5xl text-orange-300" />,
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
  {
    icon: <RiBox3Line className="text-5xl text-blue-600" />,
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
  {
    icon: <IoWalletOutline className="text-5xl text-orange-300" />,
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
];

const VideoSection = () => {
  return (
    <div className="max-w-2xl mt-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex flex-col sm:flex-row gap-8 items-center">
        <div className="text-[40px] font-bold text-center pl-[30px]">
          Our Videos
        </div>
        <div className="flex flex-col bg-[#F4F9FF] p-4 overflow-auto  sm:flex-row gap-4 sm: sm:gap-6 ">
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
